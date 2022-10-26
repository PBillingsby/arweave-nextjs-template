import fs from 'fs'
import { WarpFactory, defaultCacheOptions } from 'warp-contracts'
import * as dotenv from 'dotenv'

dotenv.config()

export async function deploy() {
    const isLocal = process.env.WARP === "local"
    let warp
    // Creating test wallet || importing Arweave wallet from root
    // Creating local || mainnet Warp instance
    let wallet
    if (isLocal) {
        warp = WarpFactory.forLocal()

        const testWallet = await warp.testing.generateWallet()
        wallet = testWallet.jwk
    }
    else {
        // Remove { ...defaultCacheOptions, inMemory: true } for logs and cache files
        warp = WarpFactory.forMainnet({ ...defaultCacheOptions, inMemory: true });

        wallet = JSON.parse(fs.readFileSync('./wallet.json', 'utf-8'))
    }
    // Importing the smart contract
    const contractSource = fs.readFileSync('contract/contract.js', 'utf-8')

    // Setting contract initState & Deploying first contract
    const { contractTxId } = await warp.createContract.deploy({
        wallet,
        initState: JSON.stringify({
            "clicks": 0
        }),
        src: contractSource
    })

    const contract = warp.contract(contractTxId).connect(wallet)
    // Interacting with smart contract by calling the click function
    await contract.writeInteraction({
        function: 'click'
    })
    // Reading and abstracting contract state
    const { cachedValue } = await contract.readState()

    return { contractTxId, cachedValue }
}

deploy()
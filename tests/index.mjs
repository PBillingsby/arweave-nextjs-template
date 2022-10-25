import { test } from 'uvu'
import * as assert from 'uvu/assert'
import { WarpFactory } from 'warp-contracts'

import ArLocal from 'arlocal'
import { deploy } from '../contract/deploy.mjs'

const arlocal = new ArLocal.default()
test('create contract and test state update', async () => {
    // set up local testing
    await arlocal.start()

    // validate
    try {
        const res = await deploy()

        // assert initial state
        assert.is(res.cachedValue.state.clicks, 1)

        // update and assert second state
        const warp = WarpFactory.forLocal()
        const wallet = await warp.testing.generateWallet()
        const contract = warp.contract(res.contractTxId).connect(wallet.jwk)

        await contract.writeInteraction({
            function: 'click'
        })

        const secondCall = await contract.readState()
        assert.is(secondCall.cachedValue.state.clicks, 2)
    } catch (err) {
        console.error(err)
    }

    // tear down local testing
    await arlocal.stop()
})

test.run();

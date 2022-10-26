# Arweave/NextJS template
This template uses -
<ul>
<li><a href="https://warp.cc/" target="_blank">Warp Contracts</a></li>
<li><a href="https://tailwindcss.com/" target="_blank">TailwindCSS</a></li>
<li><a href="https://daisyui.com/" target="_blank">DaisyUI</a></li>
<li><a href="https://github.com/lukeed/uvu" target="_blank">uvu</a></li>
</ul>

## Use

### - Wallet
Add wallet.json to root of directory. <h4><strong>Make sure it is acknowledged by .gitignore!</strong></h4>
### Contract deployment test
`yarn test`
### Deploy app
`yarn build && yarn deploy`
### Deploy smart contract
- For Testnet:
    - In `.env` add `WARP=local`
    - Run ArLocal `npx arlocal`
    - Deploy `yarn deploy-contract`
- For Mainnet
    - In `.env` add `WARP=mainnet`
    - Deploy `yarn deploy-contract`


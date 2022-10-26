# Arweave/NextJS template
This template uses -
<a href="https://warp.cc/" target="_blank">Warp Contracts</a>
<a href="https://tailwindcss.com/" target="_blank">TailwindCSS</a>
<a href="https://daisyui.com/" target="_blank">DaisyUI</a>
<a href="https://github.com/lukeed/uvu" target="_blank">uvu</a>
## Wallet
Add wallet.json to root of directory. ** Double check it is acknowledged by .gitignore! **
## Contract deployment test
`yarn test`
## Deploy app
`yarn build`
`yarn deploy`
## Deploy contract
- For Testnet:
    In `.env` add `WARP=local`
    Run ArLocal `npx arlocal`
    Deploy `yarn deploy-contract`
- For Mainnet
    In `.env` add `WARP=mainnet`
    Deploy `yarn deploy-contract`


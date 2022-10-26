# Arweave/NextJS template
Create Permaweb apps using Arweave and NextJS

## Contents
* [Usage](#usage)
* [Stack](#stack)
* [Contributions](#contributions)

## Usage
For Bundlr, this template uses `node2`. To use `node1`, change references in `package.json` to `node1`.

Create a `.env` and add `WARP=local` | `WARP=mainnet` depending on use.
### Wallet
Add wallet.json to root of directory. <h4><strong>Make sure it is acknowledged by .gitignore!</strong></h4>
### Contract deployment test
```yarn test```
### Deploy app
```yarn build && yarn deploy```
### Deploy smart contract
- For Testnet:
    - In `.env` add `WARP=local`
    - Run ArLocal `npx arlocal`
    - Deploy `yarn deploy-contract`
- For Mainnet
    - In `.env` add `WARP=mainnet`
    - Deploy `yarn deploy-contract`
### Fund Bundlr
To fund a Bundlr instance.
```yarn fund <amount>```

* Note - Funding can take up to 30 minutes to register funds.

## Stack
<ul>
<li><a href="https://warp.cc/" target="_blank">Warp Contracts</a></li>
<li><a href="https://tailwindcss.com/" target="_blank">TailwindCSS</a></li>
<li><a href="https://daisyui.com/" target="_blank">DaisyUI</a></li>
<li><a href="https://github.com/lukeed/uvu" target="_blank">uvu</a></li>
<li><a href="https://github.com/textury/arkb" target="_blank">Arkb</a></li>
</ul>

## Contributing
<ol>
<li>Create a fork</li>
<li>Create your feature branch: git checkout -b my-feature</li>
<li>Commit your changes: git commit -am 'Add some feature'</li>
<li>Push to the branch: git push origin my-new-feature</li>
<li>Submit a pull request 🚀</li>
</ol>


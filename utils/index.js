import Arweave from 'arweave';
import { WarpFactory } from 'warp-contracts'

export const arweave = Arweave.init({
  host: 'arweave.net',
  port: 443,
  protocol: 'https'
})

export const warp = WarpFactory.forMainnet()
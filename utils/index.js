import Arweave from 'arweave';
import { WarpFactory, defaultCacheOptions } from 'warp-contracts'

export const arweave = Arweave.init({
  host: 'arweave.net',
  port: 443,
  protocol: 'https'
})

// Creating local || mainnet Warp instance
// Remove { ...defaultCacheOptions, inMemory: true } for logs and cache files
export const warp = process.env.WARP === 'local' ? WarpFactory.forTestnet() : WarpFactory.forMainnet({ ...defaultCacheOptions, inMemory: true })
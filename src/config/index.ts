import { EthersAdapter } from '@reown/appkit-adapter-ethers'
import { ink } from '@reown/appkit/networks'
import type { AppKitNetwork } from '@reown/appkit/networks'

// Get projectId from https://cloud.reown.com
export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID

if (!projectId) {
  throw new Error('Project ID is not defined')
}

export const networks = [ink] as [AppKitNetwork, ...AppKitNetwork[]]

export const ethersAdapter = new EthersAdapter();
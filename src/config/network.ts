import type { ChainAssetWithWagmiChain } from '@ant-design/web3-wagmi'
import { type Chain, lineaTestnet } from 'viem/chains'
import { createConfig, http } from 'wagmi'
import { RPC_URL } from './env'

export const anvilChain: Chain = {
  id: 31337,
  name: 'Anvil',
  nativeCurrency: {
    name: 'Ethereum',
    symbol: 'ETH',
    decimals: 18,
  },
  rpcUrls: {
    default: { http: [RPC_URL] },
    public: { http: [RPC_URL] },
  },
}

export const AnvilChain: ChainAssetWithWagmiChain = {
  id: anvilChain.id,
  name: anvilChain.name,
  wagmiChain: anvilChain,
}

export const LineaTestnet: ChainAssetWithWagmiChain = {
  id: lineaTestnet.id,
  name: lineaTestnet.name,
  wagmiChain: lineaTestnet,
}

export const config = createConfig({
  chains: [anvilChain, lineaTestnet],
  transports: {
    [anvilChain.id]: http(),
    [lineaTestnet.id]: http(),
  },
})

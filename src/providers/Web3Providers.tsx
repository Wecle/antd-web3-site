'use client'

import type { PropsWithChildren } from 'react'
import {
  Mainnet,
  MetaMask,
  OkxWallet,
  TokenPocket,
  WagmiWeb3ConfigProvider,
  WalletConnect,
} from '@ant-design/web3-wagmi'
import { QueryClient } from '@tanstack/react-query'
import { http } from 'wagmi'

const queryClient = new QueryClient()

function Web3Providers({ children }: PropsWithChildren) {
  return (
    <WagmiWeb3ConfigProvider
      eip6963={{
        autoAddInjectedWallets: true,
      }}
      ens
      chains={[Mainnet]}
      transports={{
        [Mainnet.id]: http(),
      }}
      walletConnect={{
        projectId: '',
      }}
      wallets={[
        MetaMask(),
        WalletConnect(),
        TokenPocket({
          group: 'Popular',
        }),
        OkxWallet(),
      ]}
      queryClient={queryClient}
    >
      {children}
    </WagmiWeb3ConfigProvider>
  )
}

export default Web3Providers

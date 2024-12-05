'use client'

import type { PropsWithChildren } from 'react'
import { PROJECT_ID } from '@/config/env'
import { AnvilChain, config, LineaTestnet } from '@/config/network'
import {
  MetaMask,
  OkxWallet,
  WagmiWeb3ConfigProvider,
  WalletConnect,
} from '@ant-design/web3-wagmi'
import { QueryClient } from '@tanstack/react-query'

const queryClient = new QueryClient()

function Web3Providers({ children }: PropsWithChildren) {
  return (
    <WagmiWeb3ConfigProvider
      eip6963={{
        autoAddInjectedWallets: true,
      }}
      ens
      chains={[AnvilChain, LineaTestnet]}
      walletConnect={{
        projectId: PROJECT_ID,
      }}
      wallets={[
        MetaMask(),
        WalletConnect(),
        OkxWallet(),
      ]}
      config={config}
      queryClient={queryClient}
    >
      {children}
    </WagmiWeb3ConfigProvider>
  )
}

export default Web3Providers

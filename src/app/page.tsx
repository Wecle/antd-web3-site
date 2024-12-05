'use client'

import type { NFTData } from '@/types/nft'
import WalletButton from '@/components/WalletButton'
import useContract from '@/hooks/useContract'
import { Address, NFTCard } from '@ant-design/web3'
import { Space } from 'antd'
import { useEffect, useState } from 'react'
import { useAccount } from 'wagmi'

export default function Home() {
  const { isConnected } = useAccount()
  const { address, getAllNFTs, mintNft } = useContract()
  const [nfts, setNfts] = useState<NFTData[]>([])

  useEffect(() => {
    if (isConnected) {
      getAllNFTs().then(setNfts)
    }
    else {
      setNfts([])
    }
  }, [isConnected])

  const onActionClick = async (nft: NFTData) => {
    await mintNft({
      nftId: nft.id,
      count: 1,
    })

    getAllNFTs().then(setNfts)
  }

  return (
    <main className="flex min-h-screen flex-col p-4">
      {isConnected
        ? (
            <>
              <div className="flex items-center justify-end">
                <WalletButton />
              </div>
              {nfts.length
                ? (
                    <div className="flex flex-col flex-1 items-center justify-center gap-8 p-24">
                      <Address
                        ellipsis={{
                          headClip: 8,
                          tailClip: 6,
                        }}
                        copyable
                        address={address}
                      />
                      <Space align="start" size={16}>
                        {nfts.map(nft => (
                          <NFTCard
                            key={nft.id}
                            tokenId={nft.id}
                            price={{
                              symbol: 'ETH',
                              value: nft.mintPrice,
                            }}
                            description={nft?.metadata.description}
                            image={nft?.metadata.image}
                            name={nft?.metadata.name}
                            showAction
                            actionText="Vote Now"
                            onActionClick={() => onActionClick(nft)}
                          />
                        ))}
                      </Space>
                    </div>
                  )
                : (
                    <div className="flex flex-1 items-center justify-center">
                      <p className="text-lg text-gray-500">No NFTs found</p>
                    </div>
                  )}
            </>
          )
        : (
            <div className="flex flex-1 items-center justify-center">
              <WalletButton />
            </div>
          )}
    </main>
  )
}

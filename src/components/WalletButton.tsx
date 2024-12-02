'use client'

import {
  ConnectButton,
  Connector,
} from '@ant-design/web3'

function WalletButton() {
  return (
    <Connector
      modalProps={{
        mode: 'simple',
      }}
    >
      <ConnectButton quickConnect />
    </Connector>
  )
}

export default WalletButton

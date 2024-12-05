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
      <ConnectButton />
    </Connector>
  )
}

export default WalletButton

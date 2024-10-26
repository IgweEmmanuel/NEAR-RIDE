import { connect, keyStores, WalletConnection } from 'near-api-js'

const connectionConfig = {
  networkId: 'testnet',
  keyStore: new keyStores.BrowserLocalStorageKeyStore(),
  nodeUrl: 'https://rpc.testnet.near.org',
  walletUrl: 'https://testnet.mynearwallet.com/',
  helperUrl: 'https://helper.testnet.near.org',
  explorerUrl: 'https://testnet.nearblocks.io',
}

// connect to NEAR
const nearConnection = await connect(connectionConfig)

// create wallet connection
const walletConnection = new WalletConnection(nearConnection)
// const walletConnection = new WalletConnection(nearConnection);
walletConnection.requestSignIn({
  contractId: 'example-contract.testnet.REPLACE_ME',
  methodNames: [], // optional
  successUrl: 'REPLACE_ME://.com/success', // optional redirect URL on success
  failureUrl: 'REPLACE_ME://.com/failure', // optional redirect URL on failure
})

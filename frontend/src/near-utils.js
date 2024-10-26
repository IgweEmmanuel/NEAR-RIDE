// near-utils.js

import { connect, WalletConnection, Contract } from 'near-api-js'
import nearConnection from './config.js'

// Initialize NEAR connection
export async function initNear() {
  const near = await connect(nearConnection)
  const walletConnection = new WalletConnection(near)
  return walletConnection
}

// Get the NEAR contract
export async function getContract(walletConnection) {
  const accountId = walletConnection.getAccountId()

  return new Contract(accountId, nearConnection.contractName, {
    viewMethods: ['getRide', 'getAllRides'], // Add your contract's view methods here
    changeMethods: ['createRide', 'completeRide', 'rateRide'], // Add your contract's change methods here
  })
}

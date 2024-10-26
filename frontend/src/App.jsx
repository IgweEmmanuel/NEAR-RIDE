import { initNear } from './near-utils.js'
import { useEffect, useState } from 'react'

function App() {
  const [walletConnection, setWalletConnection] = useState(null)
  const [accountId, setAccountId] = useState('')

  useEffect(() => {
    const init = async () => {
      const wallet = await initNear()
      setWalletConnection(wallet)

      if (wallet.isSignedIn()) {
        setAccountId(wallet.getAccountId())
      }
    }

    init()
  }, [])

  const login = () => {
    walletConnection.requestSignIn()
  }

  const logout = () => {
    walletConnection.signOut()
    setAccountId('')
  }

  return (
    <div>
      <header>
        <h1>NEAR Ride Booking dApp</h1>
        {accountId ? (
          <div>
            <p>Signed in as {accountId}</p>
            <button onClick={logout}>Logout</button>
          </div>
        ) : (
          <button onClick={login}>Login with NEAR Wallet</button>
        )}
      </header>

      {/* Other app components */}
    </div>
  )
}

export default App

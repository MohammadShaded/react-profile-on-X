import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './assets/IconsStyles.css'
import TwitterMockupPage from './components/TwitterMockupPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <TwitterMockupPage />
    </>
  )
}

export default App

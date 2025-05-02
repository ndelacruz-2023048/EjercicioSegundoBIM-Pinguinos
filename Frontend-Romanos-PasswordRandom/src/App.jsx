import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { GlobalStyles } from './styles/GlobalStyle'
import {MyRoutes} from "../src/routers/routes"
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <MyRoutes/>
    <GlobalStyles/>
    </>
  )
}

export default App

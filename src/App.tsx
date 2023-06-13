import { GlobalLayout } from 'layouts/global'
import { Outlet } from 'react-router-dom'

import './App.scss'
import './styles/global.scss'

function App() {
  return (
    <>
      <GlobalLayout>
        <main className="main">
          <Outlet/>
        </main>
      </GlobalLayout>
    </>
  )
}

export default App

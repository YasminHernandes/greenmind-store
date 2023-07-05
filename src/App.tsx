import { GlobalLayout } from '@/layouts/global'
import { Outlet } from 'react-router-dom'

import './App.scss'
import './styles/global.scss'
import { MinicartContextProvider } from './contexts/minicartContext'

function App() {
  return (
    <>
        <MinicartContextProvider>
          <GlobalLayout>
              <main className="main">
                <Outlet/>
              </main>
          </GlobalLayout>
        </MinicartContextProvider>
    </>
  )
}

export default App

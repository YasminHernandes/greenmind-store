import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home, Products, Contacts } from './routes'

const router = createBrowserRouter([
    {
        element: <App/>,
        children: [
            { path: '/',         element: <Home/> },
            { path: '/products', element: <Products/> },
            { path: '/contacts', element: <Contacts/> }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <RouterProvider router={router}/>
)

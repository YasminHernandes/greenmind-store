import * as ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home, ProductsCatalog, Contacts, Product, Checkout } from './routes'

const router = createBrowserRouter([
    {
        element: <App/>,
        children: [
            { path: '/',         element: <Home/> },
            { path: '/products', element: <ProductsCatalog/> },
            { path: '/products/:id', element: <Product/> },
            { path: '/contacts', element: <Contacts/> },
            { path: '/checkout', element: <Checkout/> }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <RouterProvider router={router}/>
)

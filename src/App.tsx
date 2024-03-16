import { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import Loader from './components/Loader'
const Dashboard = lazy(() => import('./pages/Dashboard'))
const Products = lazy(() => import('./pages/Products'))
const Transactions = lazy(() => import('./pages/Transactions'))
const Customers = lazy(() => import('./pages/Customers'))
function App() {

  return (
   <>
   <Router>
    <Suspense fallback = {<Loader/>}>
    <Routes>
      <Route path='/' element = {<h1>Home page</h1>} />
      <Route path='/admin/dashboard' element = {<Dashboard/>} />
      <Route path='/admin/products' element = {<Products/>} />
      <Route path='/admin/transactions' element = {<Transactions/>} />
      <Route path='/admin/customers' element = {<Customers/>} />
    </Routes>
    </Suspense>
   </Router>
   </>
  )
}

export default App

import './App.css'
import Navbar from './Components/Navbar'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import SignIn from './Components/SignIn'

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<><Navbar/><Home/></>
    },
    {
      path:"/about",
      element:<><Navbar/><About/></>
    },
    {
      path:"/contact",
      element:<><Navbar/><Contact/></>
    },
    {
      path:"/signIn",
      element:<><Navbar/><SignIn/></>
    }
  ])

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App

import Home from './components/Home.jsx';
import Navbar from './components/Navbar.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Login from './components/Login.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { motion as m } from 'framer-motion';
import Landing from './Landing.jsx';

export default function Gallery() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
        <m.div initial={{ opacity: 0 }} animate={{ opacity: 3 }} transition={{ duration: 3}}>
          <Navbar />
          <Landing/>
        </m.div>
        </>
      )
    },
    {
      path: '/home',
      element: (
       <> <m.div initial={{ opacity: 0 }} animate={{ opacity: 3 }} transition={{ duration: 3}}>
          <Navbar />
          <Home />
        </m.div> </>
      )
    },
    {
      path: '/about',
      element: (
      <>  <m.div initial={{ opacity: 0 }} animate={{ opacity: 3 }} transition={{ duration: 3}}>
          <Navbar />
          <About />
        </m.div> </>
      )
    },
    {
      path: '/contact',
      element: (
        <><m.div initial={{ opacity: 0 }} animate={{ opacity: 3 }} transition={{ duration: 3}}>
          <Navbar />
          <Contact />
        </m.div></>
      )
    },
    {
      path: '/login',
      element: (
      <>  <m.div initial={{ opacity: 0 }} animate={{ opacity: 3 }} transition={{ duration: 3}}>
          <Navbar />
          <Login />
        </m.div></>
      )
    }
  ]);

  return(

<>
<RouterProvider router={router} />

</>   
     

)
  }

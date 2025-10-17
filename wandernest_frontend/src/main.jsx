import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Header from './components/pages/Header.jsx'
import Footer from './components/pages/Footer.jsx'
import { Toaster } from './components/ui/sonner.jsx'
import CreateTrip from './create-trip/index.jsx'
import HowItWorks from './components/pages/HowItWorks.jsx'
import ContactUs from './components/pages/ContactUs.jsx'
import TermsOfService from './components/pages/TermsOfService.jsx'
import PrivacyPolicy from './components/pages/PrivacyPolicy.jsx'
import CookiePolicy from './components/pages/CookiePolicy.jsx'
import UserManual from './components/pages/UserManual.jsx'
import Office from './components/pages/Office.jsx'
import JoinUs from './components/pages/joinus.jsx'
import TripDetails from './components/Trips/TripDetails'
import AISuggestionPage from "./components/pages/AISuggestionPage";
const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },

  {
    path:'/how-it-works',
    element:<HowItWorks/>
  },
  {
    path:'/contact',
    element:<ContactUs/>
  },
  {
    path:'/terms',
    element:<TermsOfService/>
  },
   {
    path:'/create-trip',
    element:<CreateTrip/>
  },
  {
    path:'/privacy',
    element:<PrivacyPolicy/>
  },
  {
    path:'/cookies',
    element:<CookiePolicy/>
  },
  {
    path:'/user-manual',
    element:<UserManual/>
  },
   {
    path:'/user-join',
    element:<JoinUs/>
  },
  {
  path: '/view-trip/:tripId',
  element: <TripDetails />
},

  {
    path: '/ai-suggestion',               
    element: <AISuggestionPage />,

  },
  {
    path: '/offices',               
    element: <Office />,

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
    
       
         
            
              <Header/>
              <Toaster  />
              <RouterProvider router={router} />
              <Footer />
             
             
          
          
        
      
  
  </React.StrictMode>,
)

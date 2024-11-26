import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './pages/Home/Home/Home';
import Menu from './pages/Menu/Menu';
import { HelmetProvider } from 'react-helmet-async';
import Order from './pages/Order/Order/Order';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Login from './pages/Login/Login';
import { Toaster } from 'react-hot-toast';
import AuthProviders from './Providers/AuthProviders';
import LoginRegTabs from './pages/LoginRegTabs/LoginRegTabs';
import Registration from './pages/Registration/Registration';
import DashboardRoot from './Layout/DashboardRoot';
import MyCart from './pages/Dashboart/MyCart/MyCart';
import PrivateRoute from './Routes/PrivateRoute';
import AdminRoute from './Routes/AdminRoute';
import AllUsers from './pages/Dashboart/AllUsers/AllUsers';
import AddItems from './pages/Dashboart/AddItems/AddItems';
import ManageItem from './pages/Dashboart/ManageItem/ManageItem';
import UpdateItem from './pages/Dashboart/ManageItem/UpdateItem';
import Payment from './pages/Dashboart/Payment/Payment';
import PaymentHistory from './pages/Dashboart/PaymentHistory/PaymentHistory';
import AdminHome from './pages/Dashboart/AdminHome/AdminHome';
import UserHome from './pages/Dashboart/UserHome/UserHome';
import Contact from './pages/Contact/Contact';
import AddReview from './pages/Dashboart/AddReview/AddReview';
import Reservation from './pages/Dashboart/Reservation/Reservation';
import MyBooking from './pages/Dashboart/MyBooking/MyBooking';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/contact-us",
        element: <Contact></Contact>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/order/:category?",
        element: <Order></Order>,
      },
      {
        path: "/loginRegTabs",
        element: <LoginRegTabs></LoginRegTabs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      }, 
    ],
  },
  {
    path: '/dashboard',
    element: <PrivateRoute><DashboardRoot></DashboardRoot></PrivateRoute>,
    children: [
      // Admin
      {
        path: 'adminHome',
        element: <AdminRoute><AdminHome></AdminHome></AdminRoute>,
      },
      {
        path: 'adminAddItems',
        element: <AdminRoute><AddItems></AddItems></AdminRoute>,
      },
      {
        path: 'adminManageItem',
        element: <AdminRoute><ManageItem></ManageItem></AdminRoute>,
      },
      {
        path: 'updateItem/:id',
        element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
        loader: ({params}) => fetch(`https://restaurant-server-blush.vercel.app/menu/${params.id}`)
      },
      {
        path: 'adminAllUsers',
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>,
      },

      // Users
      { 
        path: 'userHome',
        element: <UserHome></UserHome>,
      },
      {
        path: 'reservation',
        element: <Reservation></Reservation>,
      },
      { 
        path: 'payment',
        element: <Payment></Payment>,
      },
      { 
        path: 'paymentHistory',
        element: <PaymentHistory></PaymentHistory>,
      },
     { 
      path: 'cartDash',
      element: <MyCart></MyCart>,
    },
    {
      path: 'addReview',
      element: <AddReview></AddReview>,
    },
    {
      path: 'myBooking',
      element: <MyBooking></MyBooking>,
    },


          
    ]

  },
],
{
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true,
  },
}
);
const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
    <AuthProviders>
        <HelmetProvider>
        <div className='max-w-screen-xl mx-auto'>
            <RouterProvider router={router} future={{ v7_startTransition: true }} />
        </div>
        </HelmetProvider>
    </AuthProviders>
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    <Toaster />
  </StrictMode>,
)

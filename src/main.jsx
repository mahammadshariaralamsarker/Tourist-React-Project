import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Updateproduct from './Components/UpdateProductPage.jsx';
import SingUp from './Components/SingUp.jsx';
import SingIn from './Components/SingIn.jsx';
import AuthProvider from './Components/Providers/AuthProvider.jsx';
import Root from './Components/Root.jsx';
import AllSpot from './Components/AllSpot.jsx';
import AddSpot from './Components/AddProduct.jsx';
import MyList from './productPage.jsx';
// import CategoricalPage from './CategoricalPage.jsx';
import Home from './Components/Home.jsx';
import SpotCardDetails from './SpotCardDetails.jsx';
import CountriesSection from './Components/CountriesSection.jsx';
// import Indonesia from './Components/Indonesia.jsx';
import Notfound from './Components/Notfound.jsx';
import Thailand from './Components/Thailand';
import PrivateRoute from './Components/Providers/PrivateRoute.jsx';
import CategoricalPage from './Components/CategoricalPage.jsx';
import UpdateCategory from './Components/UpdateCategory.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    loader: () => fetch("http://localhost:5000/product"),
    children:[
      {
        path: "/*",
        element:<Notfound></Notfound>
      },

      {
        path: "updateproduct/:id",
        element: <Updateproduct></Updateproduct>,
        loader: ({ params }) => fetch(`http://localhost:5000/updateproduct/${params.id}`)
      },
      {
        path: '/',
        element:<Home></Home>,
        loader: () => fetch("http://localhost:5000/product"),
      },
      {
        path: '/signup',
        element: <SingUp></SingUp>
      },
      {    
        path: '/signin',
        element: <SingIn> </SingIn>
      },
      {
        path:"/allSpot",
        element:<AllSpot></AllSpot>,
        loader: () => fetch("http://localhost:5000/product"),
      },
      {
        path:"/addSpot",
        element:<PrivateRoute><AddSpot></AddSpot></PrivateRoute>
      },
      {
        path:"/mylist",
        element:<PrivateRoute> <MyList></MyList></PrivateRoute>,
        loader:()=>fetch ('http://localhost:5000/product')
      },
      
      {
        path:"/product/:_id",
        element:<PrivateRoute> <SpotCardDetails></SpotCardDetails> </PrivateRoute>
        ,
        loader: ()=> fetch("http://localhost:5000/product"),
      },
      {
        path:"/category",
        element:<PrivateRoute> <CategoricalPage></CategoricalPage></PrivateRoute>,
        loader:()=>fetch ('http://localhost:5000/category')
      },
      {
        path: "updateCategory/:id",
        element: <UpdateCategory></UpdateCategory>,
        loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
      },
      
      {
        path:"CountriesSection",
        element:<CountriesSection></CountriesSection>,
        loader: ()=> fetch("http://localhost:5000/product"),
      },
      {
        path:"thailand",
        element:<Thailand></Thailand>,
        loader: ()=> fetch("http://localhost:5000/product"),
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)

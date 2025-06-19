import React from 'react';
import './App.css';

import Layout from './components/Layout/Layout';

import 'react-circular-progressbar/dist/styles.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import path from 'path';
import DashboardPage from './pages/Dashboard/Dashboard';
import OrdersPage from './pages/Orders/Orders';

const Routes = [
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <DashboardPage/>
      },
      {
        path: '/products',
        element: <OrdersPage/>
      }
    ]
  }
]

const router = createBrowserRouter([
  ...Routes
])

function App() {
  return (
    <RouterProvider router={router}/>
    // <Layout/>
  );
}

export default App;

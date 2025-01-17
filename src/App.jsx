import React, { Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import CartPage from './pages/CartPage';
import MainLayout from './components/MainLayout';
import './App.css';
import { ProductsMain } from './pages/ProductsMain';
import { productsLoader } from './loaders/productsLoader';
import { productDetailLoader } from './loaders/productDetailLoader';
import ProductDetail from './pages/ProductDetail';


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout><HomePage /></MainLayout>, 
    loader: productsLoader,
  },
  {
    path: '/register',
    element: <MainLayout><RegisterPage /></MainLayout>, 
  },
  {
    path: '/login',
    element: <MainLayout><LoginPage /></MainLayout>, 
  },
  {
    path: '/cart',
    element: <MainLayout><CartPage /></MainLayout>, 
  },
  {
    path: '/products',
    element: <MainLayout><ProductsMain /></MainLayout>, 
    loader: productsLoader,
  },
  { 
    path: "/product/:id", 
    element: <MainLayout><ProductDetail /></MainLayout>,
    loader: productDetailLoader,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <Suspense>
        <RouterProvider router={router} />
      </Suspense>
    </Provider>
  );
}

export default App;

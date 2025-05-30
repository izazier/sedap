import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import React from "react";
import Loading from "./components/Loading";
import Orders from "./pages/Orders";
import User from "./pages/User";
import GuestLayout from './layouts/GuestLayout';
import GuestHome from './pages/GuestHome';
import CekStokProduk from "./pages/CekStokProduk";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";




const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Customer = React.lazy(() => import("./pages/Customer"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));
const Login = React.lazy(() => import("./pages/Auth/Login"));
const Register = React.lazy(() => import("./pages/Auth/Register"));
const Forgot = React.lazy(() => import("./pages/Auth/Forgot"));
const ProductDetail = React.lazy(() => import("./pages/ProductDetail"))

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {/* Main Layout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/user" element={<User />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} /> 
        </Route>

        {/* Auth Layout */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>

        <Route element={<GuestLayout />}>
          <Route path="/guest" element={<GuestHome />} />
          <Route path="/cek" element={<CekStokProduk />} />
        </Route>

        {/* Error Routes */}
        <Route path="/Error400" element={<NotFound errorCode="400" />} />
        <Route path="/Error401" element={<NotFound errorCode="401" />} />
        <Route path="/Error403" element={<NotFound errorCode="403" />} />
        <Route path="/Error404" element={<NotFound errorCode="404" />} />

        {/* Catch-all Route for Unknown Paths */}
        <Route path="*" element={<NotFound errorCode="404" />} />
      </Routes>
    </Suspense>
  );
}

export default App;

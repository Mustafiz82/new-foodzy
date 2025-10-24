import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/home/Home";
import About from "../components/About/About";
import FAQ from "../components/FAQ/FAQ";
import Login from "../components/Auth/Login";
import Signup from "../components/Auth/Signup";
import Cart from "../components/Cart/Cart";
import Product from "../components/Product/Product";
import ProductDetail from "../components/productDetal/ProductDetail";
import Checkout from "../components/Chekcout/Checkout";
import UserLayout from "../Layout/UserLayout";
import Profile from "../components/User/Profile/Profile";
import Wishlist from "../components/wishlist/Wishlist";
import AdminLayout from "../Layout/AdminLayout";
import Overview from "../components/Admin/Overview/Overview";
import ManageProduct from "../components/Admin/manageProducts/ManageProduct";
import ManageCategories from "../components/Admin/manage-category/ManageCategories";
import AddProduct from "../components/Admin/add-product/AddProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/product/:id",
        element: <ProductDetail />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
  {
    path: "/user",
    element: <UserLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/user",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/admin",
        element: <Overview />,
      },
      {
        path : "/admin/manage-products",
        element : <ManageProduct/>
      },
      {
        path : "/admin/manage-products/add",
        element : <AddProduct/>
      },
      {
        path : "/admin/manage-categories",
        element : <ManageCategories/>
      }
    ],
  },
]);

export default router;

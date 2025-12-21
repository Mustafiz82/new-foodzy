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
import EditProduct from "../components/Admin/add-product/EditProduct";
import SuccessPage from "../components/Success/Success";
import MyOrder from "../components/MYOrder.jsx/MyOrder";
import ManageOrder from "../components/Admin/Manage-Order/ManageOrder";
import OrderDetails from "../components/Admin/OrderDetails/OrderDetails";
import PriveteRoute from "./Private";
import ManageUser from "../components/Admin/manage-user/ManageUser";

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
        element: <PriveteRoute> <Cart /></PriveteRoute> ,
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
    element: <PriveteRoute> <UserLayout /> </PriveteRoute>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/user",
        element: <Profile />,
      },
      {
        path: "my-order",
        element: <MyOrder />,
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
        path : "/admin/manage-products/edit/:id",
        element : <EditProduct/>
      },
      {
        path : "/admin/manage-categories",
        element : <ManageCategories/>
      },
      {
        path : "/admin/manage-orders",
        element : <ManageOrder/>
      },
      {
        path : "/admin/manage-orders/:id",
        element : <OrderDetails/>
      },
      {
        path : "/admin/manage-user",
        element : <ManageUser/>
      },
    ],
  },
  {
    path: "/success",
    element : <SuccessPage/>
  }
]);

export default router;

import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Shared/Header";
import Footer from "../components/Shared/Footer";
import PageName from "../components/Shared/PageName";
import MobileHeader from "../components/Shared/MobileHeader";
import MobileBottomNav from "../components/Shared/MobileBottomNav";

const MainLayout = () => {
  return (
    <div>
      <div className="sticky top-0 bg-white z-[9999] shadow-sm">
        <div className="hidden lg:block">
          <Header />
        </div>
        <MobileHeader />
      </div>
      <PageName />
      <Outlet />
      <Footer />
      <MobileBottomNav />
    </div>
  );
};

export default MainLayout;

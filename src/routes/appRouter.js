import React, { useEffect } from "react";
import { AppHeader, ScrollToTop } from "../components";
import { useRoutes, Navigate } from "react-router";
import AppRoutes from "./appRoutes";
import { Dashboard, UserBaskets, UserHoldings } from "../pages";
import FundList from "../pages/Funds/FundList";
import FundDetail from "../pages/Funds/FundDetail";
import OrderHistory from "../pages/OrderHistory";
import CoinTracker from "../pages/CoinTracker";
import Login from "../pages/Auth/Login";
import CreateAccountForm from "../pages/Auth/CreateAccountForm";
import Home from "../pages/Home";

function AppRouter() {
  const routes = useRoutes([
    { path: AppRoutes.HOME, element: <Home /> },
    { path: AppRoutes.LOGIN, element: <Login /> },
    { path: AppRoutes.REGISTER, element: <CreateAccountForm /> },
    { path: AppRoutes.DASHBOARD, element: <Dashboard /> },
    { path: AppRoutes.FUNDS, element: <FundList /> },
    { path: AppRoutes.FUND_DETAIL, element: <FundDetail /> },
    { path: AppRoutes.HOLDINGS, element: <UserHoldings /> },
    { path: AppRoutes.ORDER_HISTORY, element: <OrderHistory /> },
    { path: AppRoutes.COIN_TRACKER, element: <CoinTracker /> },
    { path: AppRoutes.MY_FUNDS, element: <UserBaskets /> },
  ]);

  useEffect(() => {}, []);

  return (
    <div>
      <AppHeader />
      <div className="app-container">
        <ScrollToTop>{routes}</ScrollToTop>
      </div>
    </div>
  );
}

export default AppRouter;

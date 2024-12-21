import { createBrowserRouter } from "react-router";
import App from "../App";
import Homepage from "../pages/HomePage/Homepage";
import CompanyPage from "../pages/CompanyPage/CompanyPage";
import SearchPage from "../pages/SearchPage/SearchPage";
import { CompanyProfile } from "../components/companyProfile/CompanyProfile";
import { IncomeStatement } from "../components/incomeStatement/IncomeStatement";
import DesignPage from "../pages/DesignPage/DesignPage";
import { BalanceSheet } from "../components/balanceSheet/BalanceSheet";
import { CashflowStatement } from "../components/cashflowStatement/CashflowStatement";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import { ProtectedRoute } from "./ProtectedRoute";

export const router = createBrowserRouter([{
    path: "/",
    element: <App />,
    children: [
        { path: "", element: <Homepage /> },
        { path: "login", element: <LoginPage /> },
        { path: "register", element: <RegisterPage /> },
        { path: "search", element: <ProtectedRoute><SearchPage /> </ProtectedRoute> },
        { path: "design-page", element: <DesignPage /> },
        {
            path: "company/:ticker",
            element: <ProtectedRoute><CompanyPage /></ProtectedRoute>,
            children: [
                { path: "company-profile", element: <CompanyProfile /> },
                { path: "income-statement", element: <IncomeStatement /> },
                { path: "balance-sheet", element: <BalanceSheet /> },
                { path: "cashflow-statement", element: <CashflowStatement /> },
            ]
        }
    ]
}]);
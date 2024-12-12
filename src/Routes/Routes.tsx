import { createBrowserRouter } from "react-router";
import App from "../App";
import Homepage from "../pages/HomePage/Homepage";
import CompanyPage from "../pages/CompanyPage/CompanyPage";
import SearchPage from "../pages/SearchPage/SearchPage";
import { CompanyProfile } from "../components/companyProfile/CompanyProfile";
import { IncomeStatement } from "../components/incomeStatement/IncomeStatement";
import DesignPage from "../pages/DesignPage/DesignPage";

export const router = createBrowserRouter([{
    path: "/",
    element: <App />,
    children: [
        { path: "", element: <Homepage /> },
        { path: "search", element: <SearchPage /> },
        { path: "design-page", element: <DesignPage /> },
        {
            path: "company/:ticker",
            element: <CompanyPage />,
            children: [
                { path: "company-profile", element: <CompanyProfile /> },
                { path: "income-statement", element: <IncomeStatement /> },
            ]
        }
    ]
}]);
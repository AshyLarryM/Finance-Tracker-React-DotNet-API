import { createBrowserRouter } from "react-router";
import App from "../App";
import Homepage from "../pages/HomePage/Homepage";
import CompanyPage from "../pages/CompanyPage/CompanyPage";
import SearchPage from "../pages/SearchPage/SearchPage";

export const router = createBrowserRouter([{
    path: "/",
    element: <App />,
    children: [
        { path: "", element: <Homepage /> },
        { path: "search", element: <SearchPage /> },
        { path: "company/:ticker", element: <CompanyPage /> }
    ]
}]);
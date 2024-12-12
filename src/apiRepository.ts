import axios from "axios";
import { CompanyKeyMetrics, CompanyProfile, CompanySearch } from "./types/company";

interface SearchResponse {
    data: CompanySearch[];
}

export async function searchCompanies(query: string) {
    try {
        const data = await axios.get<SearchResponse>(
            `https://financialmodelingprep.com/api/v3/search?query=${query}&limit=10&exchange=NASDAQ&apikey=${process.env.REACT_APP_API_KEY}`,
        );
        return data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log("Error Message: ", error.message);
            return error.message;
        } else {
            console.log("unexpected error: ", error);
            return "An Unexpected Error Has Occured."
        }
    }
}

export async function getCompanyProfileData(query: string) {
    try {
        const data = await axios.get<CompanyProfile[]>(
            `https://financialmodelingprep.com/api/v3/profile/${query}?apikey=${process.env.REACT_APP_API_KEY}`
        )
        return data;
    } catch (error: any) {
        if (axios.isAxiosError(error)) {
            console.log("Error Message: ", error.message);
            return error.message;
        } else {
            console.log("Error message from API: ", error.message);
            return "An Unexpected error has"
        }
    }
}

export async function getKeyMetrics(query: string) {
    try {
        const data = await axios.get<CompanyKeyMetrics[]>(
            `https://financialmodelingprep.com/api/v3/key-metrics-ttm/${query}?apikey=${process.env.REACT_APP_API_KEY}`
        )
        return data;
    } catch (error: any) {
        if (axios.isAxiosError(error)) {
            console.log("Error Message: ", error.message);
            return error.message;
        } else {
            console.log("Error message from API: ", error.message);
            return "An Unexpected error has occured."
        }
    }
}
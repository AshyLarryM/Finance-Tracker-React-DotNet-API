import axios from "axios";
import { CompanyBalanceSheet, CompanyCashFlow, CompanyIncomeStatement, CompanyKeyMetrics, CompanyProfile, CompanySearch } from "./types/company";

interface SearchResponse {
    data: CompanySearch[];
}

export async function searchCompanies(query: string) {
    try {
        const data = await axios.get<SearchResponse>(
            `https://financialmodelingprep.com/api/v3/search?query=${query}&limit=10&exchange=NASDAQ&apikey=${process.env.FMPKey}`,
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
            `https://financialmodelingprep.com/api/v3/profile/${query}?apikey=${process.env.FMPKey}`
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
            `https://financialmodelingprep.com/api/v3/key-metrics-ttm/${query}?apikey=${process.env.FMPKey}`
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

export async function getIncomeStatement(query: string) {
    try {
        const data = await axios.get<CompanyIncomeStatement[]>(
            `https://financialmodelingprep.com/api/v3/income-statement/${query}?apikey=${process.env.FMPKey}`
        )
        return data;
    } catch (error: any) {
        console.log("Error Message: ", error.message);
    }
}

export async function getBalanceSheet(query: string) {
    try {
        const data = await axios.get<CompanyBalanceSheet[]>(
            `https://financialmodelingprep.com/api/v3/balance-sheet-statement/${query}?limit=40&apikey=${process.env.FMPKey}`
        )
        return data;
    } catch (error: any) {
        console.log("Error Message: ", error.message);
    }
}

export async function getCashflowStatement(query: string) {
    try {
        const data = await axios.get<CompanyCashFlow[]>(
            `https://financialmodelingprep.com/api/v3/cash-flow-statement/${query}?limit=40&apikey=${process.env.FMPKey}`
        )
        return data;
    } catch (error: any) {
        console.log("Error Message: ", error.message);
    }
}
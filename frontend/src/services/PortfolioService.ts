import axios from "axios";
import { PortfolioGet, PortfolioPost } from "../models/Portfolio";
import { handleError } from "../utils/ErrorHandler";

const api = "http://localhost:7087/api/portfolio/";

export async function portfolioAddApi(symbol: string, token: string) {
    try {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        const response = await axios.post<PortfolioPost>(
            `${api}?symbol=${symbol}`,
            {},
            config
        );
        return response;
    } catch (error) {
        handleError(error);
        throw error;
    }
}

export async function portfolioGetApi(token: string) {
    try {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        const data = await axios.get<PortfolioGet[]>(api, config);
        return data;
    } catch (error) {
        handleError(error);
    }
}

export async function portfolioDeleteApi(symbol: string, token: string) {
    try {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        const data = await axios.delete<PortfolioPost>(api + `?symbol=${symbol}`, config);
        return data;
    } catch (error) {
        handleError(error);
    }
}
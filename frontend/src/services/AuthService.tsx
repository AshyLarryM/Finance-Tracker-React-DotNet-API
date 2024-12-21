import axios from "axios";
import { handleError } from "../utils/ErrorHandler";
import { UserProfileToken } from "../models/User";

const api = "https://localhost:7087/api/";

export async function loginApi(username: string, password: string) {
    try {
        const data = await axios.post<UserProfileToken>(api + "account/login", {
            username: username,
            password: password,
        });
        return data;
    } catch (error) {
        handleError(error);
    }
}

export async function registerApi(email: string, username: string, password: string) {
    try {
        const data = await axios.post<UserProfileToken>(api + "account/register", {
            email: email,
            username: username,
            password: password,
        });
        return data;
    } catch (error) {
        handleError(error);
    }
}
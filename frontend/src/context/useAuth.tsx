import { createContext, useEffect, useState } from "react";
import { UserProfile } from "../models/User"
import { useNavigate } from "react-router";
import { loginApi, registerApi } from "../services/AuthService";
import { toast } from "react-toastify";
import React from "react";
import axios from "axios";

type UserContext = {
    user: UserProfile | null,
    token: string | null,
    registerUser: (email: string, username: string, password: string) => void,
    loginUser: (username: string, password: string) => void,
    logout: () => void,
    isLoggedIn: () => boolean,
}

type AuthContextProps = { children: React.ReactNode };

const UserContext = createContext<UserContext>({} as UserContext);

export function UserProvider({ children }: AuthContextProps) {
    const navigate = useNavigate();
    const [token, setToken] = useState<string | null>(null);
    const [user, setUser] = useState<UserProfile | null>(null);
    const [isReady, setIsReady] = useState<boolean>(false);

    useEffect(() => {
        const user = localStorage.getItem("user");
        const token = localStorage.getItem("token");
        if (user && token) {
            setUser(JSON.parse(user));
            setToken(token);
            axios.defaults.headers.common["Authorization"] = "Bearer" + token;
        }
        setIsReady(true);
    }, []);

    async function registerUser(username: string, email: string, password: string) {
        await registerApi(email, username, password).then((res) => {
            if (res) {
                localStorage.setItem("token", res?.data.token);
                const userObject = {
                    userName: res.data.userName,
                    email: res.data.email,
                }
                localStorage.setItem("user", JSON.stringify(userObject));
                setToken(res?.data.token!);
                setUser(userObject!);
                toast.success("Login Successful");
                navigate("/search");
            }
        }).catch(e => toast.warning("Server Error"));
    };

    async function loginUser(username: string,  password: string) {
        await loginApi(username, password).then((res) => {
            if (res) {
                localStorage.setItem("token", res?.data.token);
                const userObject = {
                    userName: res.data.userName,
                    email: res.data.email,
                }
                localStorage.setItem("user", JSON.stringify(userObject));
                setToken(res?.data.token!);
                setUser(userObject!);
                toast.success("Login Successful");
                navigate("/search");
            }
        }).catch(e => toast.warning("Server Error"));
    };

    function isLoggedIn(){
        return !!user;
    }

    function logout() {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);
        setToken("");
        navigate("/");
    }

    return (
        <UserContext.Provider value={{ loginUser, registerUser, user, token, logout, isLoggedIn }}>
            {isReady ? children : null}
        </UserContext.Provider>
    )
}

export function useAuth() {
    return React.useContext(UserContext)
}
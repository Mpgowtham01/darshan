import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Api from "../Api";

export const USER_AUTH_STATE = "USER_AUTH_STATE";

export const useAuth = (redirectTo = "/login") => {
    const [isLogout, setLogout] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (!sessionStorage.getItem(USER_AUTH_STATE)) navigate(redirectTo);
    }, [isLogout]);

    const handleLogout = () => {
        sessionStorage.removeItem(USER_AUTH_STATE);
        localStorage.removeItem("USER_AUTH_STATE");
        sessionStorage.removeItem("id");
        localStorage.removeItem("Role");
        localStorage.removeItem("id");
        sessionStorage.removeItem("Group_Name");
        localStorage.removeItem("token");
        Api.get("/logout", { withCredentials: true }).then((res) => {
            console.log("logout");
        });
        setLogout(true);
    };


    return { isLogout, handleLogout };
};


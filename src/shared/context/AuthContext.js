import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { APP_TOKEN } from "../constants";
import { UnauthorizedError } from "../errors/AppError";
import { useDependency } from "../hook/UseDependency";
import { useLocalStorage } from "../hook/UseLocalStorage";

export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    const {loginService} = useDependency();
    const [token, setToken] = useLocalStorage(APP_TOKEN, null);
    const navigate = useNavigate();

    const onLogin = async (userCred) => {
        try {
            const response = await loginService.doAuthenticate(userCred);
            setToken(response.token);
        } catch (e) {
            throw alert('username or password is wrong')
        }
    }

    const onLogout = () => {
        setToken(null);
        navigate('/', {replace:true})
    };

    return <AuthContext.Provider value={{onLogin, onLogout}}>{children}</AuthContext.Provider>
}
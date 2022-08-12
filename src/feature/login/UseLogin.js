import { useState } from "react"
import { useAuth } from "../../shared/hook/UseAuth"
import { useViewState } from "../../shared/hook/UseViewState"
import { RequiredFieldError, UnauthorizedError } from "../../shared/errors/AppError"
import { APP_NAVIGATION } from "../../shared/constants"
import { useNavigate } from "react-router-dom"

const UseLogin = () => {
    const {onLogin} = useAuth()
    const {viewState, setLoading, setError} = useViewState()
    const [userCred, setUserCred] = useState({
        username: '',
        password: '',
    })
    const navigate = useNavigate();

    const handleLogin = async () => {
        setLoading();
        try{
            if (userCred.username==='' && userCred.password==='') {
                throw new RequiredFieldError('Please input your username and password')
            } else {
                const response = await onLogin(userCred)
                navigate(APP_NAVIGATION.MAIN, {replace: true})
            }
        } catch (e) {
            setError(e.message)
        } 
    }

    const handleInputChange = (key, value) => {
        userCred[key] =value
        setUserCred({...userCred})
    }

    return {viewState, userCred, handleInputChange, handleLogin}
}

export default UseLogin
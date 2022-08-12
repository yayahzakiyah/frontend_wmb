import { FormButton } from "../../shared/components/Form/FormButton";
import { FormInput } from "../../shared/components/Form/FormInput";
import UseLogin from "./UseLogin";
import './Login.css';

export const LoginView = () => {
    const {viewState, userCred, handleInputChange, handleLogin} = UseLogin();
    return (
        <div className="page-login">
            <div className="login-container">
                <div className="left">
                <div className="app-title">
                    <div className="title">Welcome</div>
                    <div className="subtitle">Warung Makan Bahari</div>
                </div>
                </div>
                <div className="content-right">
                    <form className="form-login">
                        <div className="form-title">
                            <h2 style={{"fontSize":"40px"}}>Login Page</h2> 
                        </div>
                        <FormInput id='username' type='text' label='User Name' value={userCred.username}
                            onValueChange={handleInputChange}/>
                        <FormInput id='password' type='password' label='Password' value={userCred.password}
                            onValueChange={handleInputChange}/>
                        <br/>
                        <FormButton disabled={viewState.isLoading} onClick={handleLogin}
                            label='Login'/>
                        {viewState.error && <div>{viewState.error}</div>}
                    </form>
                </div>
            </div>
        </div>
        
    )
}
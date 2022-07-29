import { Component } from "react";
import './Login.css';

class Login extends Component{
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            emailValid: false,
            passwordValid: false,
            emailErrorMsg: '',
            passwordErrorMsg: '',
        }
    }

    handleChangeEmail = (event) => {
        let validRegex = /^[a-zA-Z0-9-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (event.target.value.match(validRegex)) {
            this.setState({
                email : event.target.value,
                emailValid :true,
                emailErrorMsg: ''
            })
        } else {
            this.setState({
                emailValid: false,
                emailErrorMsg: 'Email invalid'
            })
        }
        
    }

    handleChangePassword = (event) => {
        if (event.target.value.length > 5) {
            this.setState({
                password : event.target.value,
                passwordValid :true,
                passwordErrorMsg: ''
            })
        } else {
            this.setState({
                passwordValid: false,
                passwordErrorMsg: 'Password must more than 5 characters'
            })
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.callback(this.state);
        console.log(this.state.email, this.state.password);
        if (this.state.passwordValid && this.state.emailValid) {
            if(this.state.email == 'admin@example.com' && this.state.password=='12345678') {
                alert('Login success')
            } else {
                alert('Username or Passoword is wrong')
            }
        } else {
            alert('Login is failed')
        }
    }

    render(){
        return(
            <div className="flex-contrainer">
                <div className="app-title">
                    <div className="title">Welcome</div>
                    <div className="subtitle"><i>Warung Makan Bahari</i></div>
                </div>
                <div className="content-right">
                    <form className="form-login" onSubmit={this.handleSubmit}>
                        <div className="form-title">
                            <img src="https://cdn-icons-png.flaticon.com/512/61/61457.png" className="icon"/>
                            <h2>Login Page</h2> 
                        </div>
                        <label>Email Address</label>
                        <input type="text" id="username" name="username" onChange={this.handleChangeEmail}/>
                        <div className="red">{this.state.emailErrorMsg}</div>
                        <br/>
                        <label>Password</label>
                        <input type="password" id="password" name="password" onChange={this.handleChangePassword}/>
                        <div className="red">{this.state.passwordErrorMsg}</div>
                        <br/>
                        <br/>
                        <button  className={`btn btn-primary login inputButtonawesome-button-sm`} type="submit">Login</button>
                    </form>
                </div>
            </div>   
        )
    }
}

export default Login
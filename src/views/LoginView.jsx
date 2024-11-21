import "./LoginView.css";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginView() {
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function login(e) {
        e.preventDefault();
        if (password === "pleasegiveme100") {
            navigate('/movies/all');
        } else {
            alert("Wrong password, Please Try Again");
        }
    }
    return (

        <div className="login-container">
            <h1>Login View</h1>
            <div className="form-container">
                <form onSubmit={(e) => login(e)}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" value={password} onChange={(event) => { setPassword(event.target.value) }} required />

                    <button type="submit" className="login-button">Login</button>
                </form>
                <p className="register-link">New to Netflix? <a href="#">Register now</a></p>
            </div>
        </div>
    )
}

export default LoginView
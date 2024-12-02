import './RegisterView.css';
import { Link } from 'react-router-dom';
import Header from '../components/Header.jsx';

function RegisterView() {
  return (
    <div className="register-view">
      <Header showAuthButtons={false} />
      <div className="register-container">
        <div className="form-container">
          <h1>Register View</h1>
          <h2>Create an Account</h2>
          <form action="#" method="POST">
            <label htmlFor="first-name">First Name</label>
            <input id="first-name" name="first-name" required />
            <label htmlFor="last-name">Last Name</label>
            <input id="last-name" name="last-name" required />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
            <label htmlFor="confirm-password">Confirm Password</label>
            <input type="password" id="confirm-password" name="confirm-password" required />
            <button type="submit" className="register-button">Register</button>
          </form>
          <p className="login-link">
            Already have an account? <Link to={'/login'}>Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RegisterView;

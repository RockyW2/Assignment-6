import "./MoviesView.css";
import { Outlet, useNavigate } from "react-router-dom";
import Genres from "../components/Genres";

function MoviesView() {
    const navigate = useNavigate();

    function logout() {
        navigate("/");
    }
    return (
        <div className="app-container">
            <div className="header">
                <h1>Movies View</h1>
                <h1>Welcome, User!</h1>
                <button onClick={() => logout()} className="logout-button">Logout</button>
            </div>
            <div className="Genres"> 

            </div>
            <Outlet />
        </div>

    )
}

export default MoviesView
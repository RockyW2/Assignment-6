import "./MoviesView.css";
import { Outlet, useNavigate } from "react-router-dom";
import Genres from "../components/Genres";

function MoviesView() {
    const navigate = useNavigate();

    const genres = [
        {
            genre: "Action",
            id: 28
        },
        {
            genre: "Adventure",
            id: 12,
        },
        {
            genre: "Animation",
            id: 16
        },
        {
            genre: "Comedy",
            id:35,
        },
        {
            genre: "Family",
            id: 10751,
        },
        {
            genre: "Fantasy",
            id: 14,
        },
        {
            genre: "History",
            id: 36,
        },
        {
            genre: "Mystery",
            id: 9648,
        },
        {
            genre: "Science Fiction",
            id: 878,
        },
        {
            genre: "Thriller",
            id: 53
        }
    ]

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
                <Genres genresList={genres} />
            </div>
            <Outlet />
        </div>

    )
}

export default MoviesView
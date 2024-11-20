import "./HomeView.css";
import { Link } from "react-router-dom";

function HomeView() {
    return (
        <header class="header">
            <h1 id="title">Rocky Streaming Services</h1>
            <nav class="right-nav">
                <a id="latest" href="#">Latest</a>
                <a id="popular" href="#">Popular</a>
                <a id="movies" href="#">Movies</a>
                <a id="tv-shows" href="#">TV Shows</a>
                <div className="buttons">
                    <Link to={`/register`} className="button">Register</Link>
                    <Link to={`/login`} className="button">Login</Link>
                </div>
            </nav>
        </header>
    )
}

export default HomeView;
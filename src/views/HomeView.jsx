import "./HomeView.css";
import { Link } from "react-router-dom";
import React, { useRef } from "react";

function HomeView() {


    return (
        <div>
            <header className="header">
                <h1 id="title">Rocky Streaming Services</h1>
                <nav className="right-nav">
                    <a href="#">Latest</a>
                    <a href="#">Popular</a>
                    <a href="#">Movies</a>
                    <a href="#">TV Shows</a>
                    <a href="#">About</a>
                    <a href="#">Support</a>
                    <div className="buttons">
                        <Link to={`/register`} className="button">Register</Link>
                        <Link to={`/login`} className="button">Login</Link>
                    </div>
                </nav>
            </header>

            <section className="hero">
                <div className="movie-carousel-container">
                    <button className="scroll-btn left" onClick={() => scrollCarousel("left")}>&#10094;</button>
                    <div className="movie-carousel" ref={carouselRef}>
                        <img src="./assets/rocky.jpg" alt="Rocky 1" />
                        <img src="./assets/rocky2.jpg" alt="Rocky 2" />
                        <img src="./assets/rocky3.jpg" alt="Rocky 3" />
                        <img src="./assets/rocky4.jpg" alt="Rocky 4" />
                        <img src="./assets/rocky5.jpg" alt="Rocky 5" />
                        <img src="./assets/rockybalboa.jpg" alt="Rocky Balboa" />
                    </div>
                    <button className="scroll-btn right" onClick={() => scrollCarousel("right")}>&#10095;</button>
                </div>
            </section>

            <section className="feature">
                <h2>Explore Our Featured Options</h2>
                <p>Discover a curated selection of movies and shows just for you.</p>
                <div className="feature-buttons">
                    <button>Browse Movies</button>
                    <button>Watch Trailers</button>
                    <button>See Recommendations</button>
                </div>
                <div className="feature-images">
                    <img src="./assets/creed.jpg" alt="Creed" />
                    <img src="./assets/creed2.jpg" alt="Creed 2" />
                    <img src="./assets/creed3.jpg" alt="Creed 3" />
                </div>
            </section>

            <footer className="footer">
                <div className="footer-links">
                    <button>About</button>
                    <button>Support</button>
                    <button>Terms of Service</button>
                    <button>Privacy Policy</button>
                </div>
                <div className="social-media">
                    <a href="#" target="_blank">
                        <img src="./assets/facebook-icon.png" alt="Facebook" />
                    </a>
                    <a href="#" target="_blank">
                        <img src="./assets/x-icon.png" alt="X" />
                    </a>
                    <a href="#" target="_blank">
                        <img src="./assets/instagram-icon.png" alt="Instagram" />
                    </a>
                    <a href="#" target="_blank">
                        <img src="./assets/youtube-icon.png" alt="YouTube" />
                    </a>
                </div>
                <p>Made by Rocky Wang</p>
                <p>ICS4U1-10</p>
                <p>Mr. O. Qayum</p>
                <p>&copy; 2024 Rocky Streaming Services. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default HomeView;

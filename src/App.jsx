import './App.css'
import HomeView from "../src/views/HomeView";
import RegisterView from "../src/views/RegisterView";
import LoginView from "../src/views/LoginView";
import MoviesView from "../src/views/MoviesView";
import DetailView from "../src/views/DetailView";
import GenreView from "../src/views/GenreView";
import AllMoviesView from "../src/views/AllMoviesView";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/register" element={<RegisterView />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="/movies" element={<MoviesView />}>
            <Route path="all" element={<AllMoviesView />} />
            <Route path=":genres" element={<GenreView />} />
            <Route path=":id" element={<DetailView />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

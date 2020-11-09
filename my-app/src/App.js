import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Movie from "./components/API/movie";
import DetailFilm from "./components/API/DetailFilm";
import Homepage from "./components/API/Homepage";
import Navbar from "./components/API/Navbar";

import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/navbar" component={Navbar} />
      <Route exact path="/movie" component={Movie} />
      <Route path="/movie/detailfilm/:id_film" component={DetailFilm} />
    </BrowserRouter>
  );
}

export default App;

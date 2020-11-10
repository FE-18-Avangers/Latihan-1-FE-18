import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Movie from "./components/API/movie";
import DetailFilm from "./components/API/DetailFilm";
import Navbar from "./components/API/Navbar";
import UpgradePremium from './components/upgradePremium/Upgradepremium';
import Pembayaran from './components/API/Pembayaran';
import ModalPembayaran from './components/API/ModalPembayaran'

import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/navbar" component={Navbar} />
      <Route exact path="/movie" component={Movie} />
      <Route path="/movie/detailfilm/:id_film" component={DetailFilm} />
      <Route exact path="/upgrade-premium" component={UpgradePremium} />
      <Route exact path="/upgrade-premium/pembayaran" component={Pembayaran} />
      <Route exact path="/upgrade-premium/modalpembayaran" component={ModalPembayaran} />
    </BrowserRouter>
  );
}

export default App;

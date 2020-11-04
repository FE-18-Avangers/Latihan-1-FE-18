import './App.css';
import Movie from './components/API/movie';
import DetailFilm from './components/API/DetailFilm';

import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path='/movie' component= {Movie} />
        <Route path='/movie/detailfilm/:id_film' component= {DetailFilm} />
      </div>
    </BrowserRouter>

  );
}

export default App;

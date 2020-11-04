import './App.css';
import Movie from './components/movie';
import DetailFilm from './components/DetailFilm';

import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path='/' component= {Movie} />
        <Route path='/detailfilm/:id_film' component= {DetailFilm} />
      </div>
    </BrowserRouter>

  );
}

export default App;

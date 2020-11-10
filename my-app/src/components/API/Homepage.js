import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Movie from './movie'



class Homepage extends Component {

  render() {
    return (
      <div>
        <div className="jumbotron text-center" id="home">
          <div className="tampilan">
            <h1 className="display-4">Selamat Datang</h1>
            <hr />
            <h3>Film, acara TV tak terbatas</h3>
            
            <br />
            <h2>dan lebih banyak lagi</h2>
            <br />
            <br />
            <Link to={'/upgrade-premium'}>
              <button type="button" class="btn btn-danger">CLICK TO UPGRADE</button>
            </Link>
          </div>
        </div>
        <Movie />
      </div>
    );
  }
}

export default Homepage;

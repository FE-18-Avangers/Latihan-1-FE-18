import React, {Component} from 'react'

class Homepage extends Component {
    
    render() {
        return (
            <div className="jumbotron text-center" id="home">
              <div className="tampilan">
                <h1 className="display-4">Welcome FE-18 Movie</h1>
                <hr/>
                <h3>Kumpulan Film-film Anime Lengkap</h3>
                <br />
                <br />
                <h2>Siap Memulai Petualangan di dunia Fantasy?</h2>
                <br />
                <button type="button" class="btn btn-danger">CLICK TO START</button>
              </div>
            </div>
        );
    }
}

export default Homepage;
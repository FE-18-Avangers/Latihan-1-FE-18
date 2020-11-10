import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Movie extends Component {

    state = {
        datafilm: [],
        loading: true,
        error: false
    }

    componentDidMount() {
        fetch('https://ghibliapi.herokuapp.com/films')
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error('Ambil data gagal')
                }
            })
            .then(
                data => this.setState({ datafilm: data, loading: false })
            )
            .catch(error => this.state({ error: error, loading: true }))
    }

    render() {
        // console.log(this.state.datafilm)
        const { error, loading, datafilm } = this.state

        if (error) {
            return <p>{error.message}</p>
        }

        if (loading) {
            return <p>loading...</p>
        }

        return (
            <div>
                <div className='movie text-center'>
                    {/* <div className='jumbotron' style={{ backgroundColor: 'black', textAlign: 'center', color: 'white' }}>
                        <h3>Selamat datang</h3>
                        <h3>Film, acara TV tak terbatas</h3>
                        <br />
                        <h3>dan lebih banyak lagi</h3>
                    </div> */}


                    <h1 className='text-left'>Movie List</h1>

                </div>
                <div className='row'>
                    {datafilm.map(film =>
                        <div className='col-sm-4'>
                            <div className='card scroll' key={film.id}>
                                <img className='card-img-top' src='https://png.pngtree.com/png-vector/20190816/ourlarge/pngtree-film-logo-design-template-vector-isolated-illustration-png-image_1693431.jpg' style={{width:'85%', margin: 'auto'}}></img>
                                <Link to={'/movie/detailfilm/' + film.id}>
                                    <h1 style={{textAlign:'center'}}>{film.title}</h1>
                                </Link>
                                <p className='text-justify'>{film.description}</p>
                            </div>
                        </div>

                    )}
                </div>
            </div>

        )

    }
}

export default Movie
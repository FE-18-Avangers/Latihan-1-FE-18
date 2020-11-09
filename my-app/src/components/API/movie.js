import React, { Component } from 'react'
import {Link} from 'react-router-dom';

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

        const listfilm = datafilm.map(film => {
            return (
                <div key={film.id} className='card'>
                    <Link to={'/movie/detailfilm/' +film.id}>
                        <h1 className='text-center'>{film.title}</h1>
                    </Link>
                    <p>{film.description}</p>
                </div>
            )
        })

        return (
            <div className='movie'>
                <div className='jumbotron' style={{backgroundColor:'black', textAlign:'center', color:'white'}}>
                    <h3>Selamat datang</h3>
                    <h3>Film, acara TV tak terbatas</h3>
                    <br />
                    <h3>dan lebih banyak lagi</h3>
                </div>
                <h1 className='text-center' style={{color:'white'}}>Movie List</h1>
                {listfilm}
            </div>
        )
    }
}

export default Movie
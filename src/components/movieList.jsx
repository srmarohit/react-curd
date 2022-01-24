import React, { Component } from 'react';
import {movies} from '../data';
import MovieEditModal from './movieEditModal';
class MovieList extends Component {
     constructor() {
    super();
    this.state = {
        movies: movies,
        movie: null,
        isOpen:false,
        requiredItem: 0
       };
  } 
    handleDelete = (movie) =>{
        const movies = this.state.movies.filter(m => m.id !== movie.id );
        this.setState({movies})
    } 
    openModal = (movie) =>{ this.setState({ isOpen: true, movie })
    };
    closeModal = () => this.setState({ isOpen: false });
    handleSave = (id, title, genre) => {
    //console.log("click handel save");
    //console.log(title);

    const tempMovies = this.state.movies;
    //console.log('tempMovies',tempMovies);

    const updatedMovies = tempMovies.map((movie) => {
      if (movie.id == id) {
        movie.title = title;
        movie.genre = genre;
      }

      return movie;
    });

    this.setState({
      movies: updatedMovies,
      isOpen: false
    });
  };
    render() { 
        const {length: count} = this.state.movies;
        return (
            <div className="container">
                <div>Total Movies:{count}</div>
                <table className="table table-striped" width="100%" cellPadding="0" cellSpacing="0">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>genre</th>
                            <th>title</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.movies.map(movie=>(
                            <tr key={movie.id}>
                                <td>{movie.id}</td>
                                <td>{movie.genre}</td>
                                <td>{movie.title}</td>
                                <td>
                                    <button className="btn btn-primary btn-sm m-2" onClick={()=>this.openModal(movie)}>Edit</button>
                                    <button className="btn btn-danger btn-sm" onClick={()=>this.handleDelete(movie)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {
                    this.state.isOpen && <MovieEditModal
                        handleSave={this.handleSave}
                        movie={this.state.movie}
                        closeModal ={this.closeModal}
                        showModal = {this.state.isOpen} 
                    /> 
                }
            </div>
        );
    }
}
 
export default MovieList;
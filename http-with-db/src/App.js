import React, { useState } from 'react'

import MoviesList from './components/MoviesList'
import './App.css'

function App() {
  // const dummyMovies = [
  //   {
  //     id: 1,
  //     title: 'Some Dummy Movie',
  //     openingText: 'This is the opening text of the movie',
  //     releaseDate: '2021-05-18',
  //   },
  //   {
  //     id: 2,
  //     title: 'Some Dummy Movie 2',
  //     openingText: 'This is the second opening text of the movie',
  //     releaseDate: '2021-05-19',
  //   },
  // ];

  const [movies, setMovies] = useState([])

  function fetchMoviesHandler(params) {
    fetch('https://swapi.dev/api/films')
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        const transformedData = data.results.map((movie) => {
          return {
            id: movie.episode_id,
            title: movie.title,
            description: movie.opening_crawl,
            releaseDate: movie.release_date,
          }
        })
        setMovies(transformedData)
      })
      .catch((err) => {
        console.log(err.massage)
      })
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  )
}

export default App

'use client'
import { Movie as MovieType } from '../types'
import Movie from './Movie'

export default function ListMovies({ movies }: { movies: MovieType[] }) {
  return (
    <div className='p-8'>
      {!movies ? (
        <p className=''>No movies found! Try again :)</p>
      ) : (
        <ul
          data-testid='search-list'
          className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'
        >
          {movies.map((movie: MovieType) => (
            <li key={movie.imdbID}>
              <Movie movie={movie} />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

import Credits from '@/app/components/Credits'
import Save from '@/app/components/Save'
import { MovieDetails } from '@/app/types'
import Image from 'next/image'

const API_KEY = '5a876776'

type Params = {
  id: string
}

const getMovieDetails = async (id: string): Promise<MovieDetails> => {
  const response = await fetch(
    `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`
  )
  const data = await response.json()
  console.log(data)
  return data
}

export default async function Movie({ params }: { params: Params }) {
  const { id } = params
  const movie = await getMovieDetails(id)
  const genres = movie.Genre.split(',')

  return (
    <article className='flex flex-col w-full p-8'>
      <header className='flex  justify-between mb-4'>
        <div className='flex flex-col'>
          <h2 className='text-4xl'>{movie.Title}</h2>
          <div className='flex gap-4 text-sm text-gray-300 mt-1'>
            <p>{movie.Year}</p>
            <p>{movie.Rated}</p>
            <p>{movie.Runtime}</p>
          </div>
        </div>
        <div className='ml-auto mr-6'>
          <Save width={40} height={40} id={movie.imdbID} />
        </div>
        <div className='flex flex-col'>
          <p className='text-gray-300 text-sm'>IMDb RATING</p>
          <p>
            {movie.imdbRating}
            <span className='text-gray-300'>/10</span>
          </p>

          <p className='text-sm'>{movie.imdbVotes}</p>
        </div>
      </header>
      <div className='flex flex-col md:flex-row'>
        <div className='w-full mb-4 md:max-w-[300px] md:pr-8'>
          <Image
            src={movie.Poster}
            alt={movie.Title}
            width={300}
            height={450}
          />
        </div>
        <div className='w-full flex flex-col'>
          <div className='mb-2 md:order-3 md:mb-0 md:mt-4'>
            {genres.map((genre: string) => (
              <span
                key={genre}
                className='rounded-full mr-2 py-2 px-4 text-sm border border-slate-500 bg-slate-800 text-slate-200'
              >
                {genre}
              </span>
            ))}
          </div>
          <p className='py-4 border-b border-slate-500'>{movie.Plot}</p>
          <div>
            <Credits title='Director' names={movie.Director.split(', ')} />
            <Credits title='Writers' names={movie.Writer.split(', ')} />
            <Credits title='Stars' names={movie.Actors.split(', ')} />
            <Credits title='Awards' names={movie.Awards.split(', ')} />
          </div>
        </div>
      </div>
    </article>
  )
}

/* Ratings: [
  { Source: 'Internet Movie Database', Value: '4.8/10' },
  { Source: 'Rotten Tomatoes', Value: '29%' },
  { Source: 'Metacritic', Value: '44/100' }
],
Metascore: '44',
imdbRating: '4.8',
imdbVotes: '293,463', */

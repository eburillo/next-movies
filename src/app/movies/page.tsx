import Search from '../components/Search'
import ListMovies from '../components/ListMovies'

const API_KEY = '5a876776'

const getMovies = async (queryString: string) => {
  if (!queryString) return []
  const response = await fetch(
    `https://www.omdbapi.com/?apikey=${API_KEY}&s=${queryString}`
  )
  const data = await response.json()
  console.log(data.Search)
  return data.Search
}

type SearchParams = {
  query: string
}

export default async function Movies({
  searchParams
}: {
  searchParams: SearchParams
}) {
  const queryString = searchParams.query
  const movies = await getMovies(queryString)
  return (
    <main className='flex flex-col justify-between py-16'>
      <Search />
      <ListMovies movies={movies} />
    </main>
  )
}

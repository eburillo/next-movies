'use client'
import { Movie } from '../types'
import Image from 'next/image'
import Link from 'next/link'

export default function Movie({ movie }: { movie: Movie }) {
  const { Title, Poster, Year, Type, imdbID } = movie
  return (
    <Link href={`/movies/${imdbID}`}>
      <article>
        {Poster !== 'N/A' && (
          <Image src={Poster} alt={Title} width={300} height={460} />
        )}
        <header>
          <h3>{Title}</h3>
          <p>{Year}</p>
        </header>
      </article>
    </Link>
  )
}

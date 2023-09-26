'use client'

import { useRouter } from 'next/navigation'

export default function Search() {
  const router = useRouter()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const target = event.target as typeof event.target & {
      title: { value: string }
    }
    const searchString = target.title.value

    router.push(`/movies?query=${searchString}`)
  }

  return (
    <form
      role='search'
      onSubmit={handleSubmit}
      className='flex flex-col gap-2 justify-center items-center'
    >
      <label htmlFor='title' className='text-sm'>
        Search by title
      </label>
      <div className='flex flex-col sm:flex-row gap-4 items-center justify-center '>
        <input
          className='py-2 px-4 rounded-lg'
          type='search'
          aria-label='search-input'
          id='title'
          name='title'
          placeholder='Avengers, Star Wars..'
        />
        <input
          type='submit'
          className='rounded px-4 py-2 bg-slate-500 '
          value='Search'
        />
      </div>
    </form>
  )
}

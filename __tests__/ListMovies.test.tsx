import { render, screen, within } from '@testing-library/react'
import ListMovies from '@/app/components/ListMovies'
import mockMovies from '../__mocks__/mockMovies'
import { Movie } from '@/app/types'

test('should render 10 items', () => {
  render(<ListMovies movies={mockMovies as Movie[]} />)

  const list = screen.getByRole('list')
  const { getAllByRole } = within(list)
  const items = getAllByRole('listitem')
  expect(items.length).toBe(10)
})

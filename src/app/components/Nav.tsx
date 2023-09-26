import Link from 'next/link'

export default function Nav() {
  return (
    <nav>
      <ul className='flex justify-around'>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/library'>My library</Link>
        </li>
        <li>
          <Link href='/about'>About</Link>
        </li>
      </ul>
    </nav>
  )
}

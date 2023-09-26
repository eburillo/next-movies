'use client'

export default function Save({
  width,
  height,
  id
}: {
  width: number
  height: number
  id: string
}) {
  const handleSave = () => {
    console.log('save id', id)
  }

  return (
    <div onClick={handleSave} className='cursor-pointer'>
      <svg
        width={width}
        height={height}
        viewBox='0 0 24 24'
        stroke-width='2'
        stroke='currentColor'
        fill='none'
        stroke-linecap='round'
        stroke-linejoin='round'
      >
        <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
        <path d='M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572'></path>
      </svg>
    </div>
  )
}

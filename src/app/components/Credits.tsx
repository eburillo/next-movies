'use client'

type CreditType = {
  title: string
  names: string[]
}

export default function Credits({ title, names }: CreditType) {
  return (
    <div className='flex gap-4 border-slate-500 py-3 border-b'>
      <div className='font-bold text-white'>{title}</div>
      <div className='flex gap-3'>
        {names.map((name: string) => (
          <span className='text-blue-600 font-semibold' key={name}>
            {name}
          </span>
        ))}
      </div>
    </div>
  )
}

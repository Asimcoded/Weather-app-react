import React from 'react'

export default function WeatherDetail({title , value}) {
  return (
    <div className='mt-3 grid gap-1 text-center'>
        <h3 className='text-grey'>{title}</h3>
        <h2 className='ml-8 text-lg font-semibold'>{value}</h2>
    </div>
  )
}

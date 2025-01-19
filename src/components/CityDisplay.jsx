import React from 'react'

function CityDisplay({temp, url, city, country, isSelect, onClick}) {
    let style = `flex justify-between items-center p-[20px] rounded-lg  transition-all duration-200 ${!isSelect && 'bg-dark-color'}`
  return (
    <div className={style} onClick={onClick}>
        <div>
            <div className='mb-5'>
                <h1 className='text-3xl font-semibold'>{city}</h1>
                <p className='text-primary-color'>{country}</p>
            </div>
            <h1 className='font-semibold text-3xl'>{temp}</h1>
        </div>
        <img src={url} alt="icon" className='h-24'/>
    </div>
  )
}

export default CityDisplay
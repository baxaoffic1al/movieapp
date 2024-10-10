import React from 'react'

const AppInfo = ({allMoviesNumber, favoriteMoviesNumber}) => {
  return (
    <div className='p-6 rounded-md bg-slate-200 shadow-2xl'>
        <p className='text-2xl uppercase mb-3 max-sm:text-sm'>Barcha kinolar : {allMoviesNumber}</p>
        <p className='text-3xl uppercase max-sm:text-sm'>Sevimli kinolar : {favoriteMoviesNumber}</p>
    </div>

  )
}

export default AppInfo
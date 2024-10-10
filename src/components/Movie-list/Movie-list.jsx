import React from 'react'
import MovieListItem from '../Movie-list-item/Movie-list-item'

const MovieList = ({data , onDelete, onToggleProp}) => {
  return (
    <ul className='p-6 rounded-md bg-slate-200 :first-child:shadow-yellow-600 shadow-2xl'>
        {data.map(item => (
            <MovieListItem key={item.id} {...item} 
            onDelete={() => onDelete(item.id)} 
            onToggleProp={(e) => onToggleProp(item.id, e.currentTarget.getAttribute('data-toggle'))} 
            favorite={item.favorite}
            like={item.like} 
             />
        ))}
    </ul>
  )
}

export default MovieList



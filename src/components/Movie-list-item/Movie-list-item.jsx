import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { FcFullTrash } from "react-icons/fc";

const MovieListItem = (props) => {

   const { name, views, onDelete, onToggleProp, like, favorite } = props;
   return (
      <li className={`px-5 py-4 flex border-b-2 mb-4  border-black  justify-between max-md:flex items-center max-sm:flex-col max-sm:py-0 max-sm:px-0 max-sm:mb-2 `}>
         <span data-toggle="like" className={`leading-9 text-[20px] max-md:text-[12px] max-sm:text-[15px] cursor-pointer w-[550px] max-sm:w-[100%] max-sm:text-center ${favorite && `text-orange-400`} `} onClick={onToggleProp}>{name}</span>
         <input type="number" className='leading-9 bg-transparent text-[20px] max-md:text-[13px] text-center border-0 focus:outline-none max-[470px]:w-[40px] max-[470px]:h-[22px] max-sm:text-[8px] max-sm:leading-0 max-sm:h-[15px] max-sm:w-[70%]' defaultValue={views} />
         <div className={`flex justify-around items-center`}>
            <button type='button' >
               <AiFillLike data-toggle="favorite" className={`${favorite && `text-orange-400`} p-1 transition rounded-[50%] w-8 h-8 m-1 border-none cursor-pointer focus:ring max-md:w-[25px] max-md:h-[25px] max-sm:w-[20px] max-sm:h-[20px]`} onClick={onToggleProp} />
            </button>
            <button type='button' onClick={onDelete}>
               <FcFullTrash className='bg-white p-1 transition active:transition active:bg-red-500 rounded-[50%] w-8 h-8 m-1 border-none cursor-pointer max-md:w-[25px] max-md:h-[25px] max-sm:w-[20px] max-sm:h-[20px]' />
            </button>
            <FaStar data-toggle="like" className={`${like && 'opacity-100'} opacity-0 p-1 transition rounded-[50%] text-yellow-400 w-8 h-8 m-1 border-none  cursor-pointer focus:ring max-md:w-[25px] max-md:h-[25px] max-sm:w-[20px] max-sm:h-[20px]`} onClick={onToggleProp} />

         </div>
      </li>
   )
}

export default MovieListItem
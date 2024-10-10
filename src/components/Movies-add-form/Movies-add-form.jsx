import React from 'react'
import { useState } from 'react'

const MoviesAddForm = ({ addForm }) => {
  const [name, setName] = useState({
    name: "",
    views: ""
  })



  const addFormHandler = (e) => {
    e.preventDefault()
    if (name.name !== "" && name.views !== "") {
      addForm({ ...name })
    }
    setName({ name: "", views: "" })
  }




  return (
    <div className='mt-6 p-6 rounded-md bg-slate-200 shadow-xl flex flex-col'>
      <h2 className='text-2xl mb-3 max-md:text-[20px] max-sm:text-sm'>Yangi kino qo'shish</h2>
      <form className={`flex items-center justify-between gap-4 flex-wrap max-md:flex-col`} onSubmit={(e) => addFormHandler(e)}>
        <input type="text" name='name' value={name.name} className='w-[35%] p-2 rounded-md border focus:outline-none max-md:text-[12px] max-sm:text-[8px] max-md:w-[100%] border-black' placeholder='Qanday kino ?' onChange={(e) => setName({ ...name, [e.target.name]: e.target.value })} />
        <input type="text" name="views" value={name.views} className='w-[35%] p-2 rounded-md border focus:outline-none max-md:text-[12px] max-sm:text-[8px] max-md:w-[100%] border-black' placeholder='Necha marotaba korilgan ?' onChange={(e) => setName({ ...name, [e.target.name]: e.target.value })} />
        <button type='submit' className='w-[20%] bg-black max-md:text-[12px] focus:bg-slate-800 max-md:w-[100%] focus:hover:text-white active:text-white hover:bg-white hover:text-black rounded-md p-2 text-white transition ease-in-out delay-850 max-sm:text-[8px]'>Qo'shish</button>
      </form>
    </div>
  )
}

export default MoviesAddForm

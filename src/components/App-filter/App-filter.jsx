import React from 'react'

const AppFilter = ({updateFilterHandler}) => {
  return (
    <div className='mt-6 flex items-center justify-around max-[490px]:flex max-[490px]:flex-col'>
      {btnsArr.map(btn => (
        <button key={btn.name} onClick={() => updateFilterHandler(btn.name)} className='bg-black focus:bg-slate-600 focus:hover:text-white active:text-white text-white p-2 rounded-xl transition ease-in-out delay-850 hover:bg-white hover:text-black w-[30%] max-md:p-1 max-md:text-[12px] max-sm:p-1 max-[490px]:text-[8px] max-[490px]:mb-4'>
          {btn.label}
        </button>
      ))}
      {/* <button className='bg-black focus:bg-slate-800 focus:hover:text-white active:text-white text-white p-2 rounded-xl transition ease-in-out delay-850 hover:bg-white hover:text-black w-[30%] max-md:p-1 max-md:text-[12px] max-sm:p-1 max-[490px]:text-[8px] max-[490px]:mb-4'>Barcha kinolar</button>
      <button className='bg-black focus:bg-slate-800 focus:hover:text-white active:text-white text-white p-2 rounded-xl transition ease-in-out delay-850 hover:bg-white hover:text-black w-[30%] max-md:p-1 max-md:text-[12px] max-sm:p-1 max-[490px]:text-[8px] max-[490px]:mb-4'>Mashxur kinolar</button>
      <button className='bg-black focus:bg-slate-800 focus:hover:text-white active:text-white text-white p-2 rounded-xl transition ease-in-out delay-850 hover:bg-white hover:text-black w-[30%] max-md:p-1 max-md:text-[12px] max-sm:p-1 max-[490px]:text-[8px] max-[490px]:mb-4'>Eng ko'p ko'rilgan kinolar</button> */}
    </div>
  )
}


const btnsArr = [
  {name: "all", label: "Barcha kinolar"},
  {name: "popular", label: "Mashxur kinolar"},
  {name: "mostViewers", label: "Eng ko'p ko'rilgan kinolar"},
]

export default AppFilter

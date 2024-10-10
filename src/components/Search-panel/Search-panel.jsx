import React, { useEffect, useRef, useState } from 'react'

const SearchPanel = (props) => {
  const [search, setSearch] = useState({term: " ",})

  const updateTermHandler = (e) => {
    const term = e.target.value;
    setSearch({term})
    props.updateTermHandler(term)
  }

  const reffer = useRef();
  useEffect(() => {
    reffer.current.focus()
  }, [])

  return (
    <div>
      <input ref={reffer} type="text" className='outline-none rounded-md p-6 shadow-xl w-full max-sm:h-8 max-sm:text-sm' placeholder='Kinolarni qidirish' value={search.term} onChange={updateTermHandler} />
    </div>
  )
}

export default SearchPanel
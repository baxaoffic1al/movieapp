import { useEffect, useState } from 'react'
import AppFilter from './components/App-filter/App-filter'
import AppInfo from './components/App-info/App-info'
import MovieList from './components/Movie-list/Movie-list'
import MoviesAddForm from './components/Movies-add-form/Movies-add-form'
import SearchPanel from './components/Search-panel/Search-panel'
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { v4 as uuidv4 } from 'uuid';
import { uzb, eng } from './components/language'

function App() {
  const [data, setData] = useState([])
  const [isloading, setIsloading] = useState(true)
  

  const [term, setTerm] = useState('')
  const [filter, setFilter] = useState('all')

  const onDelete = (id) => {
    setData(data.filter(item => item.id !== id))
  }

  const addForm = (item) => {
    setData([...data, { ...item, id: uuidv4(), favorite: false, like: false }])
  }

  const onToggleProp = (id, prop) => {
    setData(data.map(item => {
      if (item.id === id) {
        return { ...item, [prop]: !item[prop] }
      }
      return item
    }))
  }

  const searchHandler = (arr, term) => {
    if (!term || term.length === 0) {
      return arr;
    }
    return arr.filter(item => item.name.toLowerCase().indexOf(term.toLowerCase()) > -1);
  }

  const updateTermHandler = (term) => setTerm(term);

  const updateFilterHandler = (filter) => {
    setFilter(filter)
  }

  const filterHandler = (arr, filter) => {
    switch (filter) {
      case "popular":
        return arr.filter(item => item.like)
      case "mostViewers":
        return arr.filter(item => item.views > 800)
      default:
        return arr
    }
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_start=0&_limit=6')
      .then(response => response.json())
      .then(json => {
        setIsloading(true)
        const newArr = json.map(item => ({
          name: item.title,
          id: item.id,
          views: item.id * 50,
          favorite: false,
          like: false,
        }))
        setData(newArr)
      })
      .catch(err => console.log(err))
      .finally(() => setIsloading(false))
    console.log('render');
  }, [])

  return (
    <div className='App container mx-auto h-[100vh] bg-white p-20'>
      <AppInfo allMoviesNumber={data.length} favoriteMoviesNumber={data.filter(c => c.favorite).length} />
      <div className="search-panel mt-6 rounded-md p-6 bg-slate-200 shadow-2xl">
        <SearchPanel updateTermHandler={updateTermHandler} />
        <AppFilter updateFilterHandler={updateFilterHandler} />
        {isloading && <AiOutlineLoading3Quarters className='w-[100%] mt-7 text-[80px] animate-spin' />} 
        <MovieList data={filterHandler(searchHandler(data, term), filter)} onDelete={onDelete} onToggleProp={onToggleProp} />
        <MoviesAddForm addForm={addForm} />
      </div>
    </div>
  )
}

export default App

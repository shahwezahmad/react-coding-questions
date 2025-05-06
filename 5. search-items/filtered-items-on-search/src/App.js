// import logo from './logo.svg';
// import './App.css';
import SearchBar from './components/SearchBar';
import FilteredItems from './components/FilteredItems';
import { useEffect, useState } from 'react';


function App() {
  const [items, setItems] = useState([])
  const [FilteredItem, setFilteredItems] = useState([])

useEffect(() => {
  fetch('https://dummyjson.com/products')
  .then(res => res.json())
  .then(({products}) => {
    setItems(products)
    setFilteredItems(products)
  })
}, [])

const handleChange = (e) => {
  e.preventDefault()
  setFilteredItems(items.filter(item => item.title.toLowerCase().includes(e.target.value)))
}

  return (

    <>
    <SearchBar handleChange={handleChange} />
    <FilteredItems items={FilteredItem} />
    </>
  );
}

export default App;

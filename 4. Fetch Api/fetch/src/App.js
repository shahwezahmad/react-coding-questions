// import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'
import axios from 'axios'

function App() {
  const [data, setData] = useState([])
  //  useEffect(() => {
  //   fetch('https://dummyjson.com/products')
  //   .then( res => res.json( ))
  //   .then( ({products}) => setData(products))

  //  }, [])

  // or 

  useEffect(() => {
    axios.get("https://dummyjson.com/products")
    .then( (res) => {
      if(res.status === 200) {
        setData(res.data.products)
      }
    })
  })


  return (
    <div className="container">
      {data?.length > 0 && (
        <ul>
          {data.map((item) => <li key={item.id}> {item.title}</li>)}
        </ul>
      )} 
    </div>
  );
}

export default App;

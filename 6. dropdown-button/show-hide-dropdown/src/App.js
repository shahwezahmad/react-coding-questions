import './App.css';
import { useState } from 'react';

const Dropdown = ({isOpen, setIsOpen}) => {
  const dropdownItems = ['Home', 'Products', 'Services']
  return (
      <>
        <button onClick={()=> setIsOpen(prev => !prev)}> {isOpen ? "Hide " : "Show "} Menu  </button>
        <ul>
            {isOpen && dropdownItems.map((item, i) => <li key={i}>{item}</li> ) }
         </ul>
      </>
  )
}

function App() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Dropdown isOpen = {isOpen} setIsOpen = {setIsOpen} />
  );
}

export default App;

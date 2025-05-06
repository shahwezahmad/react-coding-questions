import './App.css';
import {useState} from 'react'

function App() {
  const data = [
    {label:'Tab 1', content:'Tab 1 contact'},
    {label:'Tab 2', content:'Tab 2 contact'},
    {label:'Tab 3', content:'Tab 3 contact'},
  ]

  const [activeTab, setActiveTab] = useState(0)
  return (
   <div style={{width:'100%', marginTop:'10px'  }}>
    <div style={{display:'flex', justifyContent:'center', columnGap:'10px'}} >
        {data.map((item, i) => <button style={{background: i === activeTab ? 'gray' : 'none'}} onClick={() => setActiveTab(i)}>{item.label}</button> )}
    </div>

    <div style={{display:'flex', justifyContent:'center', columnGap:'10px', marginTop:'10px' }}>
      {data.map((item,i) => (
        <div> {i === activeTab ? <span>{item.content}</span> : null} </div>
      ) )}
    </div>


   </div>
  );
}

export default App;



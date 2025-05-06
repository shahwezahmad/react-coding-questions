import {useState} from 'react'
function ToggleButton() {
    const [isOn, setIsON] = useState(false)
 return (
     <button onClick={() => setIsON(prev => !prev)} className='button'>  {isOn ? 'On' : 'Off'} </button>
 )
}

export default ToggleButton
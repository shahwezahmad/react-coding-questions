import './App.css';
import { useState} from 'react'
const Modal = ({isOpen, setIsOpen, children}) => {
 if(!isOpen) return null
 
 return (
  <> {  (
    <div className="modal-overlay" onClick={() =>setIsOpen(false)}>
      <div className="modal-content"  >
        <div className="modal-header">
           <p>Custom Modal</p> <p  onClick={() => setIsOpen(false)} id="close-model"  > &times; </p>
        </div>
        {children}
      </div>
    </div>

  ) }
  
   </>
    
 )
}

function App() {
  const [isOpen,setIsOpen] = useState(false)
  return (
    <>
      <button onClick={() => setIsOpen(true)}>  Open </button>
      <Modal isOpen = {isOpen} setIsOpen = {setIsOpen}>
      <h1>Modal Content</h1>
        <p>This is the content inside the modal</p> 
      </Modal>
    </>
  );
}

export default App;

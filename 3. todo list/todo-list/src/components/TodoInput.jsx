import { useState } from "react"

function TodoInput({setTodos}) {
    const [todoText, setTodoText] = useState('')
    const handleSubmit = (e) =>{
        e.preventDefault()
        if(!todoText.trim()) return alert('Enter todo to save')
            setTodos((prev) => ([...prev, todoText]))
            setTodoText('')
    }
    return (
        <>
        <form onSubmit={handleSubmit}>
        <input value={todoText} placeholder="Enter todo" onChange={(e) => setTodoText(e.target.value)} />
        <button type="submit">Add</button>
        </form>
        </>
    )
}


export default TodoInput
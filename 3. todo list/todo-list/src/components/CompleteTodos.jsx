import React from 'react'

function CompleteTodos({todos}) {
  return (
    <div>
       <ul>
            {todos.length > 0 && todos.map((todo, i) => (
                <li key={i} style={{color:'green'}}> {todo} </li>
            ))}
        </ul>
    </div>
  )
}

export default CompleteTodos

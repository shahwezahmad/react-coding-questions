function Todos({todos, handleDeleteTodo, handleTodoComplete }) {

    return (
        <ul>
            {todos.length > 0 && todos.map((todo, i) => (
                <li key={i}> {todo}  <button onClick={() =>handleTodoComplete(todo, i)}>complete</button> &nbsp; &nbsp; <button onClick={() =>handleDeleteTodo(i)}>delete </button> </li>
            ))}
        </ul>
    )
}
export default Todos
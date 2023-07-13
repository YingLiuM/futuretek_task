function TodoList(props){
    

    const todos = props.todos;
    const listItems =todos.map((todo,index) =
>
    <li key={index}>{todo.text}</li>
    );

    return (
        <>
        <ul>{listItems}</ul>


        
        </>
    )}

    const todos = ["Buy groceries", "Clean the house", "Walk the dog"];
    
    ReactDOM.render(
        <TodoList todos={todos}/>,
        
    )





export default TodoList
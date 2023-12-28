import React, {useState} from "react";
import Todo from "./Todo";
const TodoList = () => {
    const [todos, setTodos] = useState([
        {task: "Wake up"}
    ]);
    const [inputValue, setInputValue] = useState("");

    // adds a task to the todo list using state
    const addTask = () => {
        if (inputValue.trim() !== "") {
            setTodos(todos.concat({task: inputValue}));
            setInputValue("");
        }
    }
    //removes a task from the todo list using state
    const removeTask = (index) => {
        const updatedTodos = todos.slice();
        updatedTodos.splice(index, 1);
        setTodos(updatedTodos);
    }
    //takes key press (enter) and calls the addTask() function
    const enterPressed = (e) => {
        if (e.key === "Enter")
            addTask();
    }

    return (
        <div>
            <label>
                Add task:
                <input style={{
                    display: 'inline-block',
                     marginLeft: '.5rem', 
                     marginRight: '.5rem', 
                     height: '1.7rem', 
                     borderRadius: '1rem', 
                     border: '1px solid gray'
                    }} type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)} //updates the input value in state
                onKeyUp={enterPressed } // allows user to use the 'enter' key to add a task to the todo list
                /> 
            </label>
            <button style={{
                backgroundColor:'green', 
                color: 'white',
                border: '1px solid green',
                borderRadius: '20px',
                height: '2rem',
                width: '5rem'
            }} onClick={addTask}>Add</button>
            
            <ul>
                <h2>Todo List</h2>  
                {todos.map((todo, index) => (
                    <li style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        borderBottom: '2px solid black',
                        paddingLeft: '1rem',
                        paddingRight: '1rem',
                      }}>
                        <Todo key={index} val={todo.task}/>
                        <button style={{
                            marginLeft: 8, 
                            backgroundColor:'#fb040c', 
                            color: 'white',
                            border: '1px solid red',
                            borderRadius: '20px',
                            height: '2rem',
                            width: '5rem'
                    }} onClick={() => removeTask(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>   
    )  
}

export default TodoList;
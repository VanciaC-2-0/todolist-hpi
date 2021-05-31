import React, { useState } from 'react';
import { TodoFormInterface } from '../interface/TodoFormInterface';
import { TodoInterface } from '../interface/TodoInterface';
import shortid from 'shortid';
import "../styles/app.css"
import "../styles/todo-form.css"

const TodoForm = (props: TodoFormInterface) => {
    //Input state
    const [formState, setFormState] = useState("");
    
    //Handler input change
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormState(event.target.value);
    };

    //Handler form submit
    const handleInputSubmit = (event: React.SyntheticEvent) =>{
        event.preventDefault();

        const newTodo: TodoInterface = {
            id: shortid.generate(),
            createdAt: new Date().toISOString().toString(),
            description: formState,
            isCompleted: false
        }

        props.handleTodoAdd(newTodo);

        setFormState("");
    }

    //Form component
    return(
        <form className="todo-form">
            <input onChange={handleInputChange} value={formState} type="text" name="input-todo-form" id="inputTodo" placeholder="What you have to do?"/>
            <button onClick={handleInputSubmit}>SUBMIT</button>
        </form>
    )
}

export default TodoForm;
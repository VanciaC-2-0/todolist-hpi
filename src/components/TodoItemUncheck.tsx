import React from "react";
import { TodoItemInterface } from "../interface/TodoItemInterface";
import '../styles/todo-item.css';
import "../styles/app.css"

const TodoItemUncheck = (props: TodoItemInterface) => {
    //Unchecked todo component
    return(
        <div className="todo-item unchecked-item">
            {!props.todo.isCompleted ? 
                <div className="todo-item-input">
                    <div onClick={() => props.handleTodoIsComplete(props.todo.id, props.todo)} className="todo-item-check">
                        {props.todo.isCompleted ? 
                        (<span className="todo-item-checked">NOT DONE!</span>) : 
                        (<span className="todo-item-unchecked">DONE !</span>)}
                    </div>
                    <div className="todo-item-description">
                        {props.todo.description}
                    </div>
                    <div onClick={() => props.handleTodoDelete(props.todo.id)} className="todo-item-remove">
                        <span>⨯</span>
                    </div>
                </div> :
                <div className="todo-item-null"></div>
            }      
        </div>
    );
}

export default TodoItemUncheck
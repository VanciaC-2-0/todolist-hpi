import React from 'react';
import { TodoItemListInterface } from '../interface/TodoItemListInterface';
import '../styles/todo-list.css'
import TodoItemCheck from './TodoItemCheck';
import TodoItemUncheck from './TodoItemUncheck';
import "../styles/app.css"
import "../styles/todo-list.css"

const TodoItemList = (props: TodoItemListInterface) => {
    //List component
    return(
        <div className="todo-list-component">
            <button onClick={() => props.handleTodoDeleteAll(props.todos)}>DELETE COMPLETED TODOS</button>
            <div className="todos-list">
            {props.isChecked === false ?
                <div className="todo-list-not-completed">
                    <h2>ALL TODOS</h2>
                    <ul>
                        {props.todos.map((todo) =>(
                            <li key={todo.createdAt}>
                                <TodoItemUncheck
                                    todo={todo} 
                                    handleTodoDelete={props.handleTodoDelete}
                                    handleTodoIsComplete={props.handleTodoIsComplete}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
                :
                <div className="todo-list-completed">
                    <h2>TODOS COMPLETED</h2>
                    <ul>
                        {props.todos.map((todo) =>(
                            <li key={todo.createdAt}>
                                <TodoItemCheck
                                    todo={todo} 
                                    handleTodoDelete={props.handleTodoDelete}
                                    handleTodoIsComplete={props.handleTodoIsComplete}
                                />
                            </li>
                            
                        ))}
                    </ul>
                </div>
            }
            </div>
        </div>
    )
}

export default TodoItemList;
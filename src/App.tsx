import React, { useState} from "react";
import TodoForm from "./components/TodoForm";
import TodoItemList from "./components/TodoItemList";
import { TodoInterface } from "./interface/TodoInterface";

const App = () => {

    const [todos, setTodos] = useState<TodoInterface[]>([
        {"id":"1","createdAt":"2021-05-11T05:39:22.142Z","description":"Slovenia value-added standardization","isCompleted":true},
        {"id":"2","createdAt":"2021-05-11T04:21:55.747Z","description":"Savings Account","isCompleted":false}
    ])

    const handleTodoCreate = (todo: TodoInterface) =>{
        const newTodosState: TodoInterface[] = [...todos]
        
        newTodosState.push(todo)
        
        setTodos(newTodosState)
        
        console.log(newTodosState);
    }

    return (
        <div className="App">
            <TodoItemList todos={todos}/>
            <TodoForm todos={todos} handleTodoCreate={handleTodoCreate}/>
        </div>
    );
}

export default App;

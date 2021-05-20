import React, { useState} from "react";
import TodoForm from "./components/TodoForm";
import TodoItemList from "./components/TodoItemList";
import { TodoInterface } from "./interface/TodoInterface";

const App = () => {

    const [todos, setTodos] = useState<TodoInterface[]>([
        {"id":"1","createdAt":"2021-05-11T05:39:22.142Z","description":"Slovenia value-added standardization","isCompleted":true},
        {"id":"2","createdAt":"2021-05-11T04:21:55.747Z","description":"Savings Account","isCompleted":false},
        {"id":"3","createdAt":"2021-05-10T12:39:52.735Z","description":"Avon FTP","isCompleted":true},
        {"id":"4","createdAt":"2021-05-10T15:54:28.208Z","description":"Towels Rubber Cotton","isCompleted":false},
        {"id":"5","createdAt":"2021-05-10T22:30:24.378Z","description":"action-items firewall","isCompleted":false}
    ])
    //Order by createdAt
    // ToLowerCase is to make it sure
    todos.sort(function(a, b){
        if (a.createdAt.toLowerCase() < b.createdAt.toLowerCase()){
            return -1;
        }
        if (a.createdAt.toLowerCase() > b.createdAt.toLowerCase()){
            return 1;
        }
        return 0;
    })
    
    const handleTodoAdd = (todo: TodoInterface) =>{
        const newTodosState: TodoInterface[] = [...todos]
        
        newTodosState.push(todo)
        
        setTodos(newTodosState)
    }

    const handleTodoDelete = (id: String) =>{
        const newTodosState: TodoInterface[] = todos.filter((todo: TodoInterface) => todo.id !== id)

        setTodos(newTodosState)
    }

    const handleTodoIsComplete = (id: String) =>{
        const newTodosState: TodoInterface[] = [...todos]

        newTodosState.find((todo: TodoInterface) => todo.id === id)!.isCompleted = !newTodosState.find((todo: TodoInterface) => todo.id === id)!.isCompleted

        setTodos(newTodosState)
    }
    return (
        <div className="App">
            <TodoForm 
                todos={todos} 
                handleTodoAdd={handleTodoAdd}
            />
            <TodoItemList 
                todos={todos}
                handleTodoDelete={handleTodoDelete}
                handleTodoIsComplete={handleTodoIsComplete}    
            />
        </div>
    );
}

export default App;

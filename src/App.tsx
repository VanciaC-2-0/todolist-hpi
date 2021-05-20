import axios from "axios";
import React, { useEffect, useState} from "react";
import TodoForm from "./components/TodoForm";
import TodoItemList from "./components/TodoItemList";
import { TodoInterface } from "./interface/TodoInterface";

const App = () => {
    //Endpoint URL
    const ENDPOINT = "https://609a4b280f5a13001721a85b.mockapi.io/tasks/" 

    //State of [todos]
    const [todos, setTodos] = useState<TodoInterface[]>([])
    //Order by createdAt
    // ToLowerCase is to make it sure
    todos.sort(function(a, b){
        if (a.createdAt.toLowerCase() < b.createdAt.toLowerCase()){
            return 1;
        }
        if (a.createdAt.toLowerCase() > b.createdAt.toLowerCase()){
            return -1;
        }
        return 0;
    })

    //Collect data from API and put in state
    useEffect(() => {
        axios.get(ENDPOINT)
            .then(todos => setTodos(todos.data))
    }, [])
    
    //Add todo
    const handleTodoAdd = (todo: TodoInterface) =>{
        axios.post(ENDPOINT, {
            id: todo.id,
            createdAt: todo.createdAt,
            description: todo.description,
            isCompleted: todo.isCompleted
        })
        const newTodosState: TodoInterface[] = [...todos]

        newTodosState.push(todo)
        
        setTodos(newTodosState)
    }

    //Delete one todo
    const handleTodoDelete = (id: String) =>{
        axios.delete(ENDPOINT+id)
        const newTodosState: TodoInterface[] = todos.filter((todo: TodoInterface) => todo.id !== id)

        setTodos(newTodosState)
    }

        //Delete all completed todo
        const handleTodoDeleteAll = (todos: TodoInterface[]) => {
            const newTodosState = todos.filter(todos => !todos.isCompleted)
    
            setTodos(newTodosState)
        }
    
    //Completed/notcompleted todo
    const handleTodoIsComplete = (id: String, todo: TodoInterface) =>{
        axios.put(ENDPOINT+id, {
            isCompleted: !todo.isCompleted
        })
    
        const newTodosState: TodoInterface[] = [...todos]
        
        newTodosState.find(todo => todo.id === id)!.isCompleted = !newTodosState.find((todo: TodoInterface) => todo.id === id)!.isCompleted

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
                handleTodoDeleteAll={handleTodoDeleteAll}    
            />
        </div>
    );
}

export default App;

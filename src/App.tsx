import React, { useEffect, useState} from "react";
import TodoForm from "./components/TodoForm";
import TodoItemList from "./components/TodoItemList";
import { TodoInterface } from "./interface/TodoInterface";

const App = () => {
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
        fetch("https://609a4b280f5a13001721a85b.mockapi.io/tasks")
            .then(res => res.json())
            .then(
                todos => setTodos(todos)
            )
    }, [])
    
    //Add todo
    const handleTodoAdd = (todo: TodoInterface) =>{
        const newTodosState: TodoInterface[] = [...todos]
        
        newTodosState.push(todo)
        
        setTodos(newTodosState)
    }

    //Delete one todo
    const handleTodoDelete = (id: String) =>{
        const newTodosState: TodoInterface[] = todos.filter((todo: TodoInterface) => todo.id !== id)

        setTodos(newTodosState)
    }

        //Delete all completed todo
        const handleTodoDeleteAll = (todos: TodoInterface[]) => {
            const newTodosState = todos.filter(todos => !todos.isCompleted)
    
            setTodos(newTodosState)
        }
    
    //Completed/notcompleted todo
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
                handleTodoDeleteAll={handleTodoDeleteAll}    
            />
        </div>
    );
}

export default App;

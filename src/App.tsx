import axios from "axios";
import React, { useEffect, useState } from "react";
import { useToasts } from 'react-toast-notifications'
import Menu from "./components/Menu";
import TodoForm from "./components/TodoForm";
import TodoItemList from "./components/TodoItemList";
import { TodoInterface } from "./interface/TodoInterface";
import { Route, HashRouter } from "react-router-dom";
import Settings from "./components/Settings";
import "./styles/app.css"

const App = () => {
    //Endpoint URL
    const ENDPOINT = "https://609a4b280f5a13001721a85b.mockapi.io/tasks/"
    //Add toast with de dependency
    const {addToast} = useToasts();

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
    //State of theme
    const [theme, setTheme] = useState("dark");

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

        addToast('"'+ todo.description + '" was added !', { 
            appearance: 'success',
            autoDismiss: true,
            autoDismissTimeout: 3000
        });
    }

    //Delete one todo
    const handleTodoDelete = (id: String) =>{
        axios.delete(ENDPOINT+id)
        const newTodosState: TodoInterface[] = todos.filter((todo: TodoInterface) => todo.id !== id)

        setTodos(newTodosState)
        addToast('Todo was deleted !', { 
            appearance: 'error',
            autoDismiss: true,
            autoDismissTimeout: 3000
        });
    }

    //Delete all completed todo
    const handleTodoDeleteAll = (todos: TodoInterface[]) => {
        const newTodosState = todos.filter(todos => !todos.isCompleted)

        setTodos(newTodosState)
        addToast('All completed todo was added !', { 
            appearance: 'error',
            autoDismiss: true,
            autoDismissTimeout: 3000
        });
    }
    
    //Completed/notcompleted todo
    const handleTodoIsComplete = (id: String, todo: TodoInterface) =>{
        axios.put(ENDPOINT+id, {
            isCompleted: !todo.isCompleted
        })
    
        const newTodosState: TodoInterface[] = [...todos]
        
        newTodosState.find(todo => todo.id === id)!.isCompleted = !newTodosState.find((todo: TodoInterface) => todo.id === id)!.isCompleted

        setTodos(newTodosState)
        if (todo.isCompleted === true){
            addToast('"'+ todo.description + '" was completed !', { 
                appearance: 'warning',
                autoDismiss: true,
                autoDismissTimeout: 3000
            });
        }
        else{
            addToast('"'+ todo.description + '" was not completed !', { 
                appearance: 'warning',
                autoDismiss: true,
                autoDismissTimeout: 3000
            });
        }
    }

    const handleTheme = () =>{
        theme === 'hpi' ? setTheme('dark') : setTheme('hpi')
        console.log(theme)
    }

    return (
        <div className="App">
            <div className={theme !== "dark" ? "dark-mode" : "hpi-mode"}>
                <HashRouter>
                    <Menu/>
                    <TodoForm 
                        todos={todos} 
                        handleTodoAdd={handleTodoAdd}
                    />
                    <Route path="/todos" component={() =>
                        <TodoItemList 
                            todos={todos}
                            handleTodoDelete={handleTodoDelete}
                            handleTodoIsComplete={handleTodoIsComplete}
                            handleTodoDeleteAll={handleTodoDeleteAll}
                            isChecked={false}   
                        />}
                    />
                    <Route path="/completed" component={() =>
                        <TodoItemList 
                            todos={todos}
                            handleTodoDelete={handleTodoDelete}
                            handleTodoIsComplete={handleTodoIsComplete}
                            handleTodoDeleteAll={handleTodoDeleteAll}
                            isChecked={true}   
                        />}
                    />
                    <Route path="/settings" component={ () => 
                        <Settings
                            theme={theme}
                            handleTheme={handleTheme}
                        />
                    }/>
                </HashRouter>
            </div>
        </div>
    );
}

export default App;

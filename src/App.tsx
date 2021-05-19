import React, { useState} from "react";
import TodoItem from './components/TodoItem';
import TodoItemList from "./components/TodoItemList";
import { TodoInterface } from "./interface/TodoInterface";

const App = () => {

    const [todos, setTodos] = useState<TodoInterface[]>([
        {"id":"1","createdAt":"2021-05-11T05:39:22.142Z","description":"Slovenia value-added standardization","isCompleted":true},
        {"id":"2","createdAt":"2021-05-11T04:21:55.747Z","description":"Savings Account","isCompleted":false}
    ]);

    return (
        <div className="App">
            <TodoItemList todos={todos}/>
        </div>
    );
}

export default App;

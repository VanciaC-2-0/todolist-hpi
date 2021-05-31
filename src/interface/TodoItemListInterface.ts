// Todo item list interface

import { TodoInterface } from "./TodoInterface";

export interface TodoItemListInterface{
    todos: TodoInterface[];
    handleTodoDelete: (id: String) => void;
    handleTodoIsComplete: (id: String, todo: TodoInterface) => void;
    handleTodoDeleteAll: (todos: TodoInterface[]) => void;
    isChecked: boolean;
}
// Todo item interface
import { TodoInterface } from "./TodoInterface";

export interface TodoItemInterface{
    todo: TodoInterface;
    handleTodoDelete: (id: String) => void;
    handleTodoIsComplete: (id: String, todo: TodoInterface) => void;
}
import { TodoInterface } from "./TodoInterface";

//Todo form interface
export interface TodoFormInterface{
    todos: TodoInterface[];
    handleTodoAdd: (todo: TodoInterface) => void;
}
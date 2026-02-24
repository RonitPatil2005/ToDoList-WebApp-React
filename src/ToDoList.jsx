import { useState } from "react"
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
    let [todos, setTodos] = useState([{ task: "sample task", id: uuidv4(), isDone: false }]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        if (newTodo.trim() === "") return;

        setTodos(prevTodos => [
            ...prevTodos,
            { task: newTodo, id: uuidv4(), isDone: false }
        ]);

        setNewTodo("");
    };


    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };

    let deleteTodo = (id) => {
        setTodos((prevTodos) => {
            return prevTodos.filter((todo) => todo.id !== id);
        });
    };

    let markAllDone = () => {
        setTodos((todos) =>
            todos.map((todo) => {
                return {
                    ...todo,
                    isDone: true,
                };
            })
        );
    };

    let markAsDone = (id) => {
        setTodos((todos) =>
            todos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        isDone: true,
                    };
                } else {
                    return todo;
                }
            })
        );
    };


    return (
        <div className="todo-container">
            <h2 className="title">✨Todo List</h2>

            <div className="input-section">
                <input placeholder="Add a new task..." value={newTodo} onChange={updateTodoValue}></input>
                <br></br>
                <button className="add-btn" onClick={addNewTask}>Add Task</button>
            </div>
            <hr />
            <br></br>
            <br></br>
            <br></br>
            <hr></hr>
            <h4>Task Todo</h4>
            <ul className="todo-list">
                {
                    todos.map((todo) => {
                        return (
                            <li key={todo.id} className="todo-item">
                                <span className={todo.isDone ? "completed" : ""}>{todo.task}</span>

                                &nbsp;&nbsp;&nbsp;
                                <div className="btn-group">
                                    <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>Delete</button>
                                    <button className="done-btn" onClick={() => markAsDone(todo.id)}>Mark as done</button>
                                </div>
                            </li>
                        );
                    })

                }
            </ul>
            <button className="mark-all-btn" onClick={markAllDone}>Mark All As DOne</button>
        </div>
    )

}
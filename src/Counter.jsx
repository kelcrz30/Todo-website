import { useState } from "react";

function Counter() {
    const [tasks, setTasks] = useState(["eat breakfast", "lunch"]);
    const [newtask, setNewTask] = useState ("");

function handleTask(event) {
    setNewTask(event.target.value)
}
function addTask(index) {
    if(newtask.trim() !== "") {
        setTasks(t => [...t, newtask])
        setNewTask("")
    }
     
}

function deleteBtn (index) {
    const updatedList = tasks.filter((element, i) => i !== index )
    setTasks(updatedList)
}
    return(
        <div className="app">
            <h1>Todo App</h1>
        <div className="todo-container">
            <div className="todo-element">
                <input className="inputText" type="text" placeholder="InputTask" value={newtask} onChange={handleTask}/>
                <button className="addBtn" onClick={addTask}>Add task</button>
            </div>
           <div className="bottom-element">
            <ol>
                {tasks.map((task, index) => 
                <li key={index}><span>{task}</span>
                <button onClick={() => deleteBtn(index)} className="removeBtn">Delete</button></li>)}
            </ol>
            </div> 
        </div>
        </div>
    )
}
export default Counter
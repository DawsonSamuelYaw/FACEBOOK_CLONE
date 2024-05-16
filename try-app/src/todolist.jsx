import { useState } from "react";
function Todo(){

    const [task, setTask] = useState(["Eat","Bath","Walk"]);
    const [newTask, setNewtask] = useState([]);

    function handlinputChnage(event){
        setNewtask(event.target.value)

    }
    function addTask(){
        if(newTask.trim()!==""){
        setTask(t=>[...t, newTask]);
        setNewtask("");
        }

    }
    function  deleteTask(index){
        const updateTask= task.filter((_,i)=>i !==index);
        setTask(updateTask);
    }
    function moveTask(){

    }
    function moveTaskup(){

    }
return(
<div className="todo-list">
<h1>TO-DO LIST</h1>
<div>
    <input type="text" placeholder="Enter a Task" value={newTask} onChange={handlinputChnage}/>

    <button className="addbtn" onClick={addTask}>ADD</button>

    <ol>
        {task.map((tasks,index)=>
        <li key={index}>
            <span className="text">{tasks}</span>
            <button className="deleteBtn" onClick={()=>deleteTask(index)}>Delete</button>
            <button className="deleteBtn" onClick={()=>moveTaskup(index)}>UP</button>
            <button className="deleteBtn" onClick={()=>moveTask(index)}>DOWN</button>

        </li>
        )}
    </ol>
</div>
</div>
    );
}
export default Todo
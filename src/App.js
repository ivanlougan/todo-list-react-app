import {useState} from 'react'
import './App.css';

function App() {

  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);
  

  const addTask = () => {

    if(!newTask) {
      alert("Enter new task");
      return;
    }
    
    const task = {
      id: Math.floor(Math.random() * 100000),
      value: newTask,
      status: false
    };

    setTasks(oldList => [...oldList, task]);
    setNewTask("");
  }

  const deleteTask = (id) => {
    const newArray = tasks.filter(task => task.id !==id);
    setTasks(newArray);
  }



  const doneTask = (id) => {
    let newTaskArray = tasks.map( task => {
      if (task.id === id) {
        return ({ ...task, status: !task.status });
      }
      return task;
    })
    setTasks(newTaskArray);

  }


  return (
    <div className="App">


      <h1>ToDo List App</h1>

      <div id='top'>

      <input 
        type="text"
        placeholder="Add next task.."
        value={newTask}
        onChange={e => setNewTask(e.target.value)}
      />

      <button id='addBtn' onClick={() => addTask()}>Add</button>

      </div>

      <div>

      <ul>
        {tasks.map(task => {
          return (
            <li id='list' key={task.id}>
              
              <button id='doneBtn' onClick={(e) => doneTask(task.id)}>Done</button>  
                <span className={task.status ? 'done' : ''}>{task.value}</span> 
              <button id='delBtn' onClick={() => deleteTask(task.id)}>X</button>
              
            </li>
          )
        })}
      </ul>

      </div>

      {tasks && tasks.length ? '' : 'No tasks..'}

    </div>
  );
}

export default App;

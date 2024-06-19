import "./App.css";
import { useState } from "react";
import TaskCard from "./components";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [profile, setProfile] = useState();
  const [id, setId] = useState("");


  const [tasks, setTasks] = useState([]);
  console.log("task list", tasks);

  const handleSelect = (status) => {
    setStatus(status.target.value);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      const updated = tasks.map((task) => {
        return id == task.id
          ? {
              ...task,
              title: title,
              email: email,
              description: description,
              name: name,
              status: status,
              profile: profile,
            }
          : task;
      });
      setTasks(updated);
    } else {
      const details = {
        name: name,
        email: email,
        title: title,
        description: description,
        status: status,
        profile: profile,
        id: Math.random(),
      };
      const updated = [...tasks, details];
      setTasks(updated);
    }
    setName("");
    setEmail("");
    setTitle("");
    setDescription("");
    setId("");
    setStatus("");
    setProfile("");
  };
  const handleEdit = (task) => {
    setTitle(task.title);
    setDescription(task.description);
    setEmail(task.email);
    setName(task.name);
    setId(task.id);
    setStatus(task.status);
    setProfile(task.profile);
  };
  
  const handleDelete = (dtask) => {
    const updated = tasks.filter((task) => task.id !== dtask.id);
    setTasks(updated);
  };
  
  return (
    <div className="App">
      <div className="main">
      <h1 className="heading">Todo App</h1>
      <form onSubmit={handleSubmit} className="form_wraper">
        <h1 className="heading">Task Details</h1>

        <div className="row1">
          <div>
            <label>Name</label>
            <br></br>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />{" "}
          </div>
          <div>
            <label>Email</label>
            <br></br>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />{" "}
          </div>
        </div>
        <div className="row2">
          <label>Profile Image URL:</label>
          <br></br>
          <input
            type="url"
            value={profile}
            onChange={(e) => setProfile(e.target.value)}
          />{" "}
        </div>
        <div className="row3">
          <div>
            <label>Title</label> <br></br>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />{" "}
          </div>
          <div>
            <label>Status</label>
      <br></br>
            <select onChange={handleSelect} >
              <option value="">select</option>
              <option value="pending" className="pending">Pending</option>
              <option value="complete" className="completed">Completed</option>
            </select>{" "}
          </div>
        </div>
        <div className="row4">
          <label>Description</label> <br></br>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />{" "}
        </div>
        <div className="row5">
          <button type="submit" className="add_task_button">Add Task</button>
        </div>
      </form>

      {tasks.map((task) => (
        <TaskCard
          task={task}
          onEdit={() => {
            handleEdit(task);
          }}
          onDelete={() => {
            handleDelete(task);
          }}
        />
      ))}
    </div>
    </div>
  );
};

export default App;

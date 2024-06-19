import "./index.css";

const TaskCard = (props) => {
  const task = props.task;
  const getStyle = (e) => {
    if (task.status === 'pending') {
      return { color: 'white',
        backgroundColor: 'orange',
        borderRadius: '5px',
        padding: '5px' };
    } else if (task.status === 'complete') {
      return { color: 'white',
        backgroundColor: 'green',
        borderRadius: '5px',
        padding: '5px' };
    } else {
      return {};
    }
  };
  return (
    <div className="card">
      <h2 className="heading">Your Tasks:</h2>
      <div className="header">
        
        <div style={getStyle()}>{task.status}
        </div>
        <div>
          <button onClick={props.onEdit} className="edit_button">Edit</button>
          <button onClick={props.onDelete} className="del_button">Delete</button>
        </div>
      </div>
      <div className="task_title_detail">
        <h2>Title:{task.title}</h2>
        <p>Description: <br></br><br></br>{task.description}</p>
      </div>
      <div className="user_details">
        <div><img className="profile" src={task.profile}/></div>
        <div>
          {" "}
          <p className="name">{task.name}</p>
          <p className="email">{task.email}</p>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;

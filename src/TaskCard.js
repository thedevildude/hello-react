import "./TaskCard.css";

const TaskCard = (props) => {
  return (
    <div className="TaskItem">
      <h2 className="text-xl font-bold">{props.title}</h2>
      <p>{props.dueDate? "Due on": "Completed on"} : {props.dueDate? props.dueDate : props.completedAtDate}</p>
      <p>Assignee: {props.assignee}</p>
    </div>
  )
}

export default TaskCard;
// Section 3
export default function TaskList({
    tasks,
    onDelete
  }) {
    return (
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <Task
              task={task}
              onDelete={onDelete}
            />
          </li>
        ))}
      </ul>
    );
  }
  


  function Task({ task, onDelete }) {
    return (
      <div>
      <label>
          {task.text}
      </label>
      <button onClick={() => onDelete(task.id)}>Delete</button>
      </div>
    );
  }
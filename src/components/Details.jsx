    import { useState } from 'react';
    import { FaTrash } from 'react-icons/fa';
    
    const initialTodoData = [
      {
        todoId: 1,
        todoText: "Buy groceries",
        isCompleted: false,
        createdAt: "2023-07-15T12:00:00Z"
      },
      {
        todoId: 2,
        todoText: "Read a book",
        isCompleted: false,
        createdAt: "2023-07-15T12:15:00Z"
      },
      {
        todoId: 3,
        todoText: "Finish project",
        isCompleted: true,
        createdAt: "2023-07-15T12:30:00Z"
      }
    ];
    
    export default function Details() {
      const [todoData, setTodoData] = useState(initialTodoData);
    
      const updateIsCompleted = (todoId) => {
        setTodoData((prevTodos) =>
          prevTodos.map((item) =>
            item.todoId === todoId ? { ...item, isCompleted: !item.isCompleted } : item
          )
        );
      };

  return (
    <div className="details-block">
      <div className="task-filter">
        <select name="filter" id="filter">
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="Pending">Pending</option>
        </select>
      </div>
      <div className="task-block">  
        <div className="task-box">
              {todoData.map((data) => (
          <div key={data.todoId} className="task-box-header">
            <span className='todo-text' style={{ flex: 8 }}>
              {data.todoText}
            </span>
            <span style={{ flex: 1 , textAlign:"center"}}>
              <div className="checkbox-wrapper-24">
              <input
                    type="checkbox"
                    id={`check-${data.todoId}`}
                    checked={data.isCompleted}
                    onChange={() => updateIsCompleted(data.todoId)}
                  />
                  <label htmlFor={`check-${data.todoId}`}>
                  <span></span>
                </label>
              </div>
            </span>
            <span style={{ flex: 1, textAlign:"center" }}>
                <button className='delete-btn' >
                    <FaTrash className="trash-icon" />
                </button>
            </span>
          </div>
        ))}
          </div>
      </div>
    </div>
  );
}

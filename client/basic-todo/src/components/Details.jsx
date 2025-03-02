    import { useState,useEffect } from 'react';
    import { FaTrash } from 'react-icons/fa';
    import { getTodoResponse,deleteTodoResponse } from '../service';
    
    // const initialTodoData = [
    //   {
    //     todoId: 1,
    //     todoText: "Buy groceries",
    //     isCompleted: false,
    //     createdAt: "2023-07-15T12:00:00Z"
    //   },
    //   {
    //     todoId: 2,
    //     todoText: "Read a book",
    //     isCompleted: false,
    //     createdAt: "2023-07-15T12:15:00Z"
    //   },
    //   {
    //     todoId: 3,
    //     todoText: "Finish project",
    //     isCompleted: true,
    //     createdAt: "2023-07-15T12:30:00Z"
    //   },
    // ];
    
    export default function Details({addTodo}) {
      const [todoData, setTodoData] = useState([]);
      const [filterValue, setfilterValue] = useState('All');

      useEffect(() => {
        console.log('tododata changed'); 
        todoSet();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

      async function fetchTodoData() {
        try {
          const data = await getTodoResponse()
          console.log("Fetched Data:", data);
          return data.data;
        } catch (error) {
          console.log("Error fetching data:", error);
          return [];
        }
      }

      async function deleteTodoData(id) {
        try {
          const data = await deleteTodoResponse(id)
          console.log("delete Data:", data);
          return data.data;
        } catch (error) {
          console.log("Error delete data:", error);
          return false;
        }
      }
      
      
      function todoSet(){
        fetchTodoData().then((data) => {
          setTodoData(data);
        }).catch((error) => {
          console.log("Error fetching data:", error);
        });
      }
    
      const updateIsCompleted = (todoId) => {
        setTodoData((prevTodos) =>
          prevTodos.map((item) =>
            item.todoId === todoId ? { ...item, isCompleted: !item.isCompleted } : item
          )
        );
      };

    const deleteTodo = async(todo) => {
        // setTodoData((prevTodos) =>
        //     prevTodos.filter((item) =>item.todoId !== todo.todoId)
        //   );
        console.log(todo.todoId);
        const deleteResponse = await deleteTodoData(todo.todoId)
        console.log(deleteResponse,'deleteresponse');
        if(deleteResponse){
          todoSet();
        }
    }

    const filterTodo = (event) => {
        console.log(event);
        setfilterValue(event);
        
    }

    const filteredTodos = todoData.filter((item) => {
        if (filterValue === "Completed") return item.isCompleted;
        if (filterValue === "Pending") return !item.isCompleted;
        return true;
      });

  return (
    <div className="details-block">
      <div className="task-filter">
        <select value={filterValue} onChange={e => filterTodo(e.target.value)}  name="filter" id="filter">
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="Pending">Pending</option>
        </select>
      </div>
      <div className="task-block">  
        <div className="task-box">
        {filteredTodos.map((data) => (
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
                <button onClick={()=> deleteTodo(data)} className='delete-btn' >
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

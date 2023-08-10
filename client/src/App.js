import logo from './logo.svg';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import React, {useState} from 'react'


function App() {

  const [input, setInput]= useState("")
  const[todos, setTodos] = useState([])

const addTodo = (e) =>{
  if(input.trim() === '') return
  else{
  e.preventDefault()
  setTodos([...todos, {id: uuidv4(), title: input}])
  setInput("")
  }
}
const removeTodo =(id)=>{
  setTodos(todos.filter((todo)=> todo.id !== id))

}


  return (
    <div className="App">
      <h1>Todo App</h1>
     <div className="container">
        <form onSubmit={addTodo} >

          <input type="text" 
          name="input" 
          value={input}
          onChange={(e)=> setInput(e.target.value)}
          />
           <button type="submit">add Todo</button>
        </form>
        <div>
          {todos.map((todo)=>(
            <>
            <p key={todo.id} className='todo'>{todo.title}
            
            <i 
            className="fa-solid fa-trash"
            onClick={()=>removeTodo(todo.id)}>
              </i>
            </p>
          
              
              </>
          ))}
        </div>
           <button type=""></button>
        
        </div>
    </div>
  );
}

export default App;

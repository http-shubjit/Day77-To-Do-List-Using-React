import React, { useEffect, useRef, useState } from 'react'
import './Todo.css'
import Todoitem from './Todoitem'
 
let count=0;
const Todo = () => {

const [todo,settodo]=useState([]);
const inputref=useRef(null);
localStorage.setItem("todocount",count)

const add=()=>{
settodo([...todo,{no:count++,text:inputref.current.value,display:""}])
inputref.current.value="";
}


useEffect(()=>{
  settodo(JSON.parse(localStorage.getItem("todo")))
  count=localStorage.getItem("todocount")
},[])

useEffect(()=>{
setTimeout(()=>{
  console.log(todo)
  localStorage.setItem("todo",JSON.stringify(todo));
},100)
},[todo]);




  return (
<div className="todo">
<div className="todoheader">TO-Do LISt</div>
<div className="todoadd">
  <input type="text" className='todoinput' placeholder='Add your Text...' ref={inputref} />
  <div className="todoaddbtn" onClick={()=>{add()}}>Add</div>

</div>

<div className="todolist">
{todo.map((item,index)=>{
return <Todoitem key={index} settodo={settodo} no={item.no} display={item.display} text={item.text}/>
})}
</div>
</div>  
)
}

export default Todo
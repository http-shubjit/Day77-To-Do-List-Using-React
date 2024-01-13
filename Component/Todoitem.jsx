import React from 'react'
import './Todoitem.css'
import tick from './Assets/tick.png'
import cross from './Assets/cross.png'
import nottick from './Assets/not_tick.png'
const TodoItem = ({no,display,text,settodo}) => {

  const deletetodo=(no)=>{
    let data=JSON.parse(localStorage.getItem("todo"))
    data=data.filter((todo)=>todo.no!==no)
     settodo(data);
    
  }

const toggle=()=>{
  let data=JSON.parse(localStorage.getItem("todo"))
for(let i=0;i<data.length;i++){
if(data[i].no===no){
if(data[i].display==="")
{
  data[i].display="linethrough"

}
else{
  data[i].display=""
}
break;
  }
}
settodo(data)
}

  return (
    <div className='todoitem'>

<div className={`todoitemcontainer ${display}`} onClick={()=>{
  toggle(no)
}}>
{   display===""?<img src={nottick} alt="" />:<img src={tick} alt="" />}
   
<div className="todoitemtext">{text}</div>
</div>
<img src={cross} onClick={()=>{
  deletetodo(no)
}}  className='todoitemcrossicon' alt="" />
    </div>
  )
}

export default TodoItem
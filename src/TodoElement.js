
 const TodoElement = (props) => 
 <div style = {{display : "flex", justifyContent: "center",}}>
     <div 
        style = {{textDecoration: props.toDo.complete ? "line-through" : ""}}
        onClick = {props.changeComplete}>{props.toDo.text}
     </div>
     <button style = {{marginLeft: "5pt"}} onClick = {props.onDelete}>X</button>

 </div>


 export default TodoElement;
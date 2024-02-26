import { useState } from "react"
const Todolist=()=>{
    const [item, setNewitem]=useState('')
    const [todolist, setTodoList]=useState([])  

    const handleinput=(e)=>{
     setNewitem(e.target.value)
    }

    const addItem=(e)=>{
        e.preventDefault();

        if(item.trim !==''){
          const newitem={id: crypto.randomUUID(), text: item}
            setTodoList([...todolist, newitem]) 
        setNewitem('')

        }
        
    }

    const deleteItem=(id)=>{
        const postdeleteList=todolist.filter(item => item.id !==id)
        setTodoList(postdeleteList)
    };

    return(

        <form>
            <div className="form-row">
            <label htmlFor="item"> New Item</label>
            <input value={item} onChange={handleinput} type={"text"}/>
            <button className="btn" onClick={addItem}>Add</button>
             <h2>Todo List</h2>



        {todolist.map((todo)=>(
                <div key={todo.id}>
                <input type="checkbox"/> 
                <span className="items">{todo.text}</span> 
                <button className="delete" onClick={()=> deleteItem(todo.id)}>delete</button>
                </div>
                ))}
            </div>
        </form>

    )
}

export default Todolist
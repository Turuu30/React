import { useState } from 'react';
import './App.css';

export const Todo = () => {
    const [newItem , setNewItem] = useState("");
    const [items , setItems] = useState([])

    const addItem = ()=>{
        // console.log(newItem)
        if(!newItem){
            alert("hooson baina");
            return;
        }
         const item = {
            id: Math.floor(Math.random()* 1000),
            value: newItem
         };
         setItems(oldList => [...oldList ,item]);
         setNewItem("");
         
    }
    const remove = (id)=>{
        // console.log(id)
        const newArry = items.filter(item => item.id !==id);
        setItems(newArry)
    }
    return (
        <div className="counter">
            <div className='border'>
                <h1>Todo</h1>
                <div className='d'>
                    <input type="text" value={newItem} onChange={e => setNewItem(e.target.value)}
                    />
                    <button onClick={()=> addItem()} className='add'></button>
                </div>
                    {items.map(item => {
                        return(
                            <div className='word' key={item.id}>{item.value}
                                <button onClick={()=> remove(item.id)} className='remove'></button>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}
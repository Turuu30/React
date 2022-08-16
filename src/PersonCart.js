// import Data from './data/people.json'
import './page/cart.css'
// import { Avatar } from './page/Avatar'
import { useState } from 'react'
import { Button } from './page/Button'
import { Avatar } from './page/Avatar';
export const PersonCart = () => {
    const [isCliked , setIsCliked] = useState(false);
    const ondorBolgoh = () => {
         setIsCliked((e) => {
                console.log(e)
         });
         
    }
    return(
        <div style={{width: "100vw" , height: "100vh"}}>
            <div style={{
                width: "200px",
                height: isCliked ? "200px" : "400px",
                background: "blue"
            }}>

            </div>

            <button onClick={ondorBolgoh}>ClickMe</button>
            
        </div>
    )
}
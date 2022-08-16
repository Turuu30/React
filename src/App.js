
// import { Todo } from './todo'
// import './App.css';
import People from "./data/people.json"
const App = () =>{
    return(
      <div>
        <Name data={People}/>
      </div>
    )
}

// const App= () => {
//   return(
//     <div>
//       <Todo/>
//     </div>
//   )
// }
// const data = [
//   {id: "1", firstName: "Jon", lastName: "Snow", age: 35},
//   {id: "2", firstName: "Cersei", lastName: "Lannister", age: 42},
//   {id: "3", firstName: "Jaime", lastName: "Lannister", age: 45},
//   {id: "4", firstName: "Arya", lastName: "Stark", age: 16},
//   {id: "5", firstName: "Daenerys", lastName: "Targaryen", age: 30},
// ];

// const App =(props)=>{
//   return(
//     // <div>
//     //   <Data data = {data}/>
//     // </div>
//     <body style={{backgroundColor: '#000040' , width:"100%"  ,height:"100vh",
//     display:'flex' , justifyContent:'center' , alignItems:'center'}}>
//       <div style={{width: '1000px' ,
//     height: '300px' ,
//     border: '1px solid white',
//     borderRadius: '40px', 
//     display:'flex',
//     flexDirection:'column',
//     justifyContent:'space-between',
//     padding:'80px 30px 30px 30px'}}>
//       <div className='line'>
//         <span>ID</span>
//         <span>First name</span>
//         <span> Last name</span>
//         <span> Age</span>
//         <span> Full lastName</span>
//       </div>
//       <div className='line'>
//         <Data data={data}/>
//       </div>
//       <div className='line'>
//       {/* <Date/> */}
        
//       </div>
//       <div className='line'>
//       {/* <Date/> */}

//       </div>
//       <div className='line'>
//       {/* <Date/> */}

//       </div>
//       <div className='line'>
//         <span></span>
//         <span></span>
//         <span></span>
//         <span></span>
//         <span></span>
//       </div>
//       </div>
//     </body>
//   )
// }

export default App;

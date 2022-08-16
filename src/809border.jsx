const Data = (props)=>{
    return(
       <div>
            {props.map((el)=> {
                return(
                    <div>
                        <span>{el.id}</span>
                        <span>{el.firstName}</span>
                        <span>{el.lastName}</span>
                        <span>{el.age}</span>
                    </div>
                )
            })}
       </div>
    )
}
export default Data;
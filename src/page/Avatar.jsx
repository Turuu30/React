import { Button } from "./Button"

export const Avatar = (props , i) => {
    return(
        <div className="body">
            <div className="persenCart">
                <div className="personHeader">
                    <h3>{props.data.name}</h3>
                    <p>{props.data.profession}</p>
                </div>
                <div >
                    <img className="profile" src={props.data.profile} alt="" />
                </div>
                <div className="experiences">
                    <span>{props.data.experience.map( (ev) => {
                        return(
                            <div className="text">
                                <img className="add" src="https://cdn.icon-icons.com/icons2/1206/PNG/512/1491254405-plusaddmoredetail_82972.png" /> {ev}
                            </div>
                        )
                    })}</span>
                </div>
                <button>z</button>
            </div>
        </div>
    )
}
import "./FacesSs.css"

export function Faces__Ss(props) {
    return(
        <div className="faces__ss">
            <img src={props.photo} alt=""/>
            <div className="faces__ss__name">
                <p className="name">{props.name}</p>
                <p className="ss__job">{props.job}<span className="blue">{props.color}</span></p>
            </div>
        </div>
    )
}
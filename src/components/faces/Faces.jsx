import "./Faces.css"
export function Faces(props) {
    return(
        <div className="faces">
            <img src={props.photo} alt=""/>
            <p className="semibold twentyfour">{props.name}</p>
            <p className="medium eighteen">{props.job}</p>
            <div className="sixth__section__highlight">
                <div>{props.additionalinfo1}</div>
                <div>{props.additionalinfo2}</div>
            </div>
        </div>
    )
}
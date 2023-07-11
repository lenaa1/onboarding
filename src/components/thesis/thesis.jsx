import "./thesis.css";
export function Thesis(props) {
    return(<div className="thesis__wrapper">
        <div className="number">{props.number}</div>
        <div className="thesis">{props.thesis}</div>
        </div>
    )
}
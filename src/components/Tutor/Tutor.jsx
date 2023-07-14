import "./Tutor.css"
export function Tutor(props) {
    return(
        <div className="tutor__wrapper">
            <img src={props.photo} alt=""/>
            <p className="name tutor">{props.name}</p>
            <div>
            <p className="eighteen">Тьютор направлений:</p>
            <p><span className="pink__small">{props.programs}</span></p>
            </div>
        </div>
    )
}
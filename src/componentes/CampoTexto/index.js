import "./CampoTexto.css";

const CampoTexto = (props) => {
console.log(props)
    return <div className="campo-texto">
        <label>{props.titulo}</label>
        <input type="text" placeholder={props.placeholder} />
    </div>
}


export default CampoTexto;
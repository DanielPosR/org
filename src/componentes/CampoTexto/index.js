import "./CampoTexto.css";

const CampoTexto = (props) => {

  const manejarCambio = (e) => {
    props.actualizarValor(e.target.value);
  }


  return (
    <div className="campo-texto">
      <label>{props.titulo}</label>
      <input
        type="text"
        placeholder={props.placeholder}
        required={props.required}
        value={props.valor}
        onChange={manejarCambio}
      />
    </div>
  );
};

export default CampoTexto;
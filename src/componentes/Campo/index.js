import "./Campo.css";

const Campo = (props) => {

  const { type = "text", placeholder, required, valor, titulo } = props;

  const placeholderModificado = `${placeholder}...`;

  const manejarCambio = (e) => {
    props.actualizarValor(e.target.value);
  }


  return (
    <div className={`campo campo-${type}`}>
      <label>{titulo}</label>
      <input
        type={type}
        placeholder={placeholderModificado}
        required={required}
        value={valor}
        onChange={manejarCambio}
      />
    </div>
  );
};

export default Campo;
import Colaborador from "../Colaborador";
import "./Equipo.css";

const Equipo = (props) => {

    const { titulo, colorPrimario, colorSecundario } = props.datos;

    const obj = {
        backgroundColor: colorSecundario,
        borderColor: colorPrimario
    }

    const estiloTitulo = {
        borderColor: colorPrimario
    }

    return <section className="equipo" style={obj}>
        <h3 style={estiloTitulo}>{titulo}</h3>

        <div className="colaboradores" >
            <Colaborador />
            <Colaborador />
        </div>
    </section>
}

export default Equipo;
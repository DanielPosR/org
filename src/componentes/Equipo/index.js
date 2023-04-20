import Colaborador from "../Colaborador";
import "./Equipo.css";

const Equipo = (props) => {

    const { titulo, colorPrimario, colorSecundario } = props.datos;
    const { colaboradores, eliminarColaborador } = props;

    const obj = {
        backgroundColor: colorSecundario,
        borderColor: colorPrimario
    }

    const estiloTitulo = {
        borderColor: colorPrimario
    }

    return <>
        {colaboradores.length > 0 &&
            <section className="equipo" style={obj}>
                <h3 style={estiloTitulo}>{titulo}</h3>

                <div className="colaboradores">

                    {colaboradores.map((colaborador, index) => {
                        return <Colaborador
                            key={index}
                            datos={colaborador}
                            colorPrimario={colorPrimario} 
                            eliminarColaborador = {eliminarColaborador}
                            />
                    })}

                </div>
            </section>
        }
    </>
}

export default Equipo;
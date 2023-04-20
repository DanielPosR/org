import Colaborador from "../Colaborador";
import "./Equipo.css";
import hexToRgba from "hex-to-rgba";

const Equipo = (props) => {

    const { titulo, colorPrimario } = props.datos;
    const { colaboradores, eliminarColaborador, actualizarColor } = props;

    const obj = {
        backgroundColor: hexToRgba(colorPrimario, 0.35)
    }

    const estiloTitulo = {
        borderColor: colorPrimario
    }

    return <>
        {colaboradores.length > 0 &&
            <section className="equipo" style={obj}>

                <input
                    type="color"
                    className="input-color"
                    value={colorPrimario}
                    onChange={(e) => {
                        actualizarColor(e.target.value, titulo)
                    }}
                />



                <h3 style={estiloTitulo}>{titulo}</h3>

                <div className="colaboradores">

                    {colaboradores.map((colaborador, index) => {
                        return <Colaborador
                            key={index}
                            datos={colaborador}
                            colorPrimario={colorPrimario}
                            eliminarColaborador={eliminarColaborador}
                        />
                    })}

                </div>
            </section>
        }
    </>
}

export default Equipo;
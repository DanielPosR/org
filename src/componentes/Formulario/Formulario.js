import "./Formulario.css";
import Campo from "../Campo";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";
import { useState } from "react";


const Formulario = (props) => {

    const { registrarColaborador, equipos, crearEquipo } = props;

    const [nombre, actualizarNombre] = useState("");
    const [puesto, actualizarPuesto] = useState("");
    const [foto, actualizarFoto] = useState("");
    const [equipo, actualizarEquipo] = useState("");

    const [titulo, actualizarTitulo] = useState("");
    const [color, actualizarColor] = useState("");


    const manejarEnvio = (e) => {
        e.preventDefault();

        let obtenerDatos = {
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(obtenerDatos);
    }


    const manejarNuevoEquipo = (e) => {
        e.preventDefault();

        crearEquipo({
            titulo,
            colorPrimario: color
        });
    }

    return <section className="formulario">
        <div className="contenedor formularios">
            <form onSubmit={manejarEnvio}>
                <h2>Rellena el formulario para crear el colaborador</h2>
                <Campo
                    titulo="Nombre"
                    placeholder="Ingresar nombre"
                    required
                    valor={nombre}
                    actualizarValor={actualizarNombre}
                />

                <Campo
                    titulo="Puesto"
                    placeholder="Ingresar puesto"
                    required
                    valor={puesto}
                    actualizarValor={actualizarPuesto}
                />

                <Campo
                    titulo="Foto"
                    placeholder="Ingresar enlace de foto"
                    required
                    valor={foto}
                    actualizarValor={actualizarFoto}
                />

                <ListaOpciones
                    valor={equipo}
                    actualizarEquipo={actualizarEquipo}
                    equipos={equipos}
                />

                <Boton name="Crear" />
            </form>

            <form onSubmit={manejarNuevoEquipo}>
                <h2>¿Falta tu equipo? Crealo aquí</h2>
                <Campo
                    titulo="Titulo"
                    placeholder="Ingresar titulo"
                    required
                    valor={titulo}
                    actualizarValor={actualizarTitulo}
                />

                <Campo
                    type="color"
                    titulo="Color"
                    placeholder="Seleccionar color"
                    required
                    valor={color}
                    actualizarValor={actualizarColor}
                />

                <Boton name="Crear Equipo" />

            </form>
        </div>
    </section>
}

export default Formulario;
import "./Formulario.css";
import CampoTexto from "../CampoTexto";
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
                <CampoTexto
                    titulo="Nombre"
                    placeholder="Ingresar nombre"
                    required
                    valor={nombre}
                    actualizarValor={actualizarNombre}
                />

                <CampoTexto
                    titulo="Puesto"
                    placeholder="Ingresar puesto"
                    required
                    valor={puesto}
                    actualizarValor={actualizarPuesto}
                />

                <CampoTexto
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
                <CampoTexto
                    titulo="Titulo"
                    placeholder="Ingresar titulo..."
                    required
                    valor={titulo}
                    actualizarValor={actualizarTitulo}
                />

                <CampoTexto
                    titulo="Color"
                    placeholder="Ingresar color en Hex..."
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
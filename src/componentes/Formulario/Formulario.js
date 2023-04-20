import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";
import { useState } from "react";


const Formulario = (props) => {

    const { registrarColaborador, equipos } = props;

    const [nombre, actualizarNombre] = useState("");
    const [puesto, actualizarPuesto] = useState("");
    const [foto, actualizarFoto] = useState("");
    const [equipo, actualizarEquipo] = useState("");


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

    return <section className="formulario">
        <form className="contenedor" onSubmit={manejarEnvio}>
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
    </section>
}

export default Formulario;
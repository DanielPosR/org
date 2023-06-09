import { useState } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";
import Header from "./componentes/Header/Header";
import Formulario from "./componentes/Formulario/Formulario";
import MiOrg from "./componentes/MiOrg/MiOrg";
import Equipo from "./componentes/Equipo";
import Footer from "./componentes/Footer";

/**Todo lo que se agregue antes del return es codigo JS.
 * Para utilizar las funciones o variables dentro del return existen 3 maneras distintas
 * Con llaves - {nombre variable o funcion}
 * Etiquetas de apertura y cierre - <nombreVariable></nombreVariable>
 * etiqueta de apertura - <NombreVariable />
 * */
function App() {
  //*Estado - hooks
  //*useState sintaxis*/
  //*const [nombre de la variable, funcion que modifica el valor de la variable] = useState('valor inicial de la variable');
  //* Ternario --> condicion ? seMuestra : noSeMuestra;



  const [mostrarFormulario, actualizarMostrar] = useState(false);
  const [colaboradores, actualizarColaboradores] = useState([
    {
      id: uuid(),
      equipo: "Front End",
      foto: "https://github.com/DanielPosR.png",
      nombre: "Daniel Posadas Rangel",
      puesto: "Estudiante Desarrollo",
      fav: true
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor",
      fav: false
    },
    {
      id: uuid(),
      equipo: "Devops",
      foto: "https://github.com/genesysaluralatam.png",
      nombre: "Genesys Rondon",
      puesto: "Instructora",
      fav: false
    },
    {
      id: uuid(),
      equipo: "Móvil",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jeanmarie Quijada",
      puesto: "Instructora",
      fav: false
    },
    {
      id: uuid(),
      equipo: "Data Science",
      foto: "https://github.com/christianpva.png",
      nombre: "Christian Velasco",
      puesto: "Instructor",
      fav: false
    }
  ]);

  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    },
  ]);



  //*OCULTAR O MOSTRAR EL FORMULARIO DE REGISTRO
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  };



  //*REGISTRAR COLABORADOR 
  const registrarColaborador = (colaborador) => {

    actualizarColaboradores([...colaboradores, colaborador]);

  }



  //* ELIMINAR COLABORADOR
  const eliminarColaborador = (id) => {

    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id);

    actualizarColaboradores(nuevosColaboradores);
  }



  //*ACTUALIZAR COLOR DE FONDO DEL EQUIPO/
  const actualizarColor = (color, id) => {

    const equiposActualizados = equipos.map((equipo) => {

      if (equipo.id === id) {
        equipo.colorPrimario = color;
      }

      return equipo;
    })

    actualizarEquipos(equiposActualizados);
  }



  //*CREAR EQUIPO
  const crearEquipo = (nuevoEquipo) => {

    actualizarEquipos([...equipos, { ...nuevoEquipo, id: uuid() }])
  }



  //* FUNCION LIKE
  const like = (id) => {

    const colaboradoresFavs = colaboradores.map((colaborador) => {

      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav
      }

      return colaborador;
    })

    actualizarColaboradores(colaboradoresFavs);
  }


  return (
    <div>
      <Header />
      {/* Si {mostrarFormulario === true (entonces)? (ejecuta este codigo) : (ejecuta este otro)} operador ternario sintaxis larga*/}

      {mostrarFormulario && <Formulario /*sintaxis corta de un ternario */
        equipos={equipos.map((equipo) => equipo.titulo)}
        registrarColaborador={registrarColaborador}
        crearEquipo={crearEquipo}
      />
      }

      <MiOrg cambiarMostrar={cambiarMostrar} />

      {equipos.map((equipo) => {

        return <Equipo
          datos={equipo}
          key={equipo.titulo}
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like}
        />
      })}

      <Footer />

    </div>
  );
}

export default App;
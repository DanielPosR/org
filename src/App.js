import { useState } from "react";
import "./App.css";
import Header from "./componentes/Header/Header";
import Formulario from "./componentes/Formulario/Formulario";
import MiOrg from "./componentes/MiOrg/MiOrg";

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
  const [mostrarFormulario, actualizarMostrar] = useState(true);

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  };

  return (
    <div>
      <Header />
      {mostrarFormulario === true ? <Formulario /> : <div></div>}

      <MiOrg cambiarMostrar={cambiarMostrar}/>
    </div>
  );
}

export default App;

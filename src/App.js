import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';

function App() {

  /**Todo lo que se agregue antes del return es codigo JS. 
   * Para utilizar las funciones o variables dentro del return existen 3 maneras distintas
   * Con llaves - {nombre variable o funcion}
   * Etiquetas de apertura y cierre - <nombreVariable></nombreVariable>
   * etiqueta de apertura - <NombreVariable />
   * */
  return (

    <div>

      <Header />
      <Formulario />

    </div>

  );
}

export default App;

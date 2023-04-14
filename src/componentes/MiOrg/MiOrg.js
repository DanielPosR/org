import "./MiOrg.css";

const MiOrg = (props) => {
  //*Estado - hooks
  //*useState sintaxis*/
  //*const [nombre de la variable, funcion que modifica el valor de la variable] = useState('valor inicial de la variable');

  return (
    <section className="orgSection">
      <h3 className="title">Mi organización</h3>
      <img onClick={props.cambiarMostrar} src="/img/add.png" alt="icono add" />
    </section>
  );
};

export default MiOrg;

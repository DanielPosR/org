import "./ListaOpciones.css"

const ListaOpciones = (props) => {

    /**Para iterar un arreglo en react no utilizamos forEach, para ello utilizaremos el metodo map() 
     * 
     * arreglo.map( (datos, posicion) => {
     *      return informacion;
     *  } )
    */

    const equipos = [
        "Programación",
        "Front End",
        "Data Sience",
        "Devops",
        "Ux y Diseño",
        "Móvil",
        "Innovación y Gestión"
    ]

    return <div className="lista-opciones">
        
        <label>Equipo</label>
        <select >
            {equipos.map((equipo, posicion) => {
                
                return <option key={posicion}>{equipo}</option>

            })}
        </select>
    </div>
}

export default ListaOpciones;
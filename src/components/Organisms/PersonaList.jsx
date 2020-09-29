import React from 'react'

const PersonaList = (props) => (
    <> 
      <br />
      <button className="btn btn-primary" 
         onClick={() => props.showCloseModalAdd()}>Insertar nuevo registro
      </button>
      <br />
      <br />
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Edad</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {
            props.data.map(p => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.nombre}</td>
                <td>{p.apellido}</td>
                <td>{p.edad}</td>
                <td>
                  <button className="btn btn-success" onClick={() => props.personaSelect(p, "Editar")}>Editar</button> {"  "}
                  <button className="btn btn-danger" onClick={() => props.personaSelect(p, "Eliminar")}>Eliminar</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
)


export default PersonaList
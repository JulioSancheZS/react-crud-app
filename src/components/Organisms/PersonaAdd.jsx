import React from 'react'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';


const PersonaAdd = (prop) => {
  
  return(

    <Modal isOpen={prop.showModalAdd}>
        <ModalHeader>Insertar Datos</ModalHeader>
        <form onSubmit={prop.handleSubmit}>
        <ModalBody>
            <div className="form-group">
              <input
                type="text"
                placeholder="Nombre"
                className="form-control"
                name="nombre"
                required
                onChange={prop.handleChange} />
              <br />
              <input
                type="text"
                placeholder="Apellido"
                className="form-control"
                name="apellido"
                required
                onChange={prop.handleChange} />
              <br />
              <input
                type="number"
                placeholder="Edad"
                className="form-control"
                name="edad"
                required
                onChange={prop.handleChange} />
              <br />
            </div>
        
        </ModalBody>
        <ModalFooter>
          <button
            type="submit"
            className="btn btn-primary"
          >
            Agregar
          </button>
          <button
            className="btn btn-danger"
            onClick={() => prop.showCloseModalAdd()}>
            Cancelar
          </button>
        </ModalFooter>
        </form>
      </Modal>
  );
}


export default PersonaAdd
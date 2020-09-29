import React from 'react'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

const PesonaEdit = (props) => (

  <Modal isOpen={props.showModalEdit}>
    <ModalHeader>Editar Datos</ModalHeader>
    <ModalBody>
      <div className="form-group">

        <label>ID</label>
        <input type="text"
          className="form-control"
          readOnly
          value={props.persona && props.persona.id} />
        <br />

        <input
          type="text"
          placeholder="Nombre"
          className="form-control"
          name="nombre"
          onChange={props.handleChange}
          value={props.persona && props.persona.nombre} />
        <br />

        <input
          type="text"
          placeholder="Apellido"
          className="form-control"
          name="apellido"
          onChange={props.handleChange}
          value={props.persona && props.persona.apellido} />
        <br />

        <input
          type="number"
          placeholder="Edad"
          className="form-control"
          name="edad"
          onChange={props.handleChange}
          value={props.persona && props.persona.edad} />
        <br />

      </div>
    </ModalBody>
    <ModalFooter>
      <button
        className="btn btn-primary"
        onClick={() => props.putPersona()}>
        Actualizar
      </button>
      <button
        className="btn btn-danger"
        onClick={() => props.showCloseModalEdit()}>
        Cancelar
      </button>
    </ModalFooter>
  </Modal>
)

export default PesonaEdit
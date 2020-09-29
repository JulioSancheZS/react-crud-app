import React from 'react'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

const PersonaDelete = (props) => (

  <Modal isOpen={props.showModalDelete}>
    <ModalHeader>Eliminar Registro</ModalHeader>
    <ModalBody>
    </ModalBody>
    <ModalFooter>
      <button
        className="btn btn-danger"
        onClick={() => props.deletePersona()}>
        Si
      </button>
      <button
        className="btn btn-success"
        onClick={() => props.showCloseModalDelete()}>
        No
     </button>
    </ModalFooter>
  </Modal>
)



export default PersonaDelete
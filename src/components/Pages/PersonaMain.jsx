import React, { useEffect, useState } from 'react';
import Loader from 'react-loader-spinner'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import PersonaList from "../Organisms/PersonaList"
import PersonaAdd from '../Organisms/PersonaAdd';
import PersonaEdit from '../Organisms/PersonaEdit'
import PersonaDelete from '../Organisms/PersonaDelete'


const PersonaMain = () => {

  

  //Estados HOOKS
  const [data, setData] = useState([]) //Obtener datos
  const [showModalAdd, setShowModalAdd] = useState(false) //modal insertar
  const [showModalEdit, setShowModalEdit] = useState(false) //modal Editar
  const [showModalDelete, setShowModalDelete] = useState(false) //modal Eliminar
  const [persona, setPersona] = useState({
    id: '',
    nombre: '',
    apellido: '',
    edad: ''
  })//obtener los input
  //const [value, setValue] =useState({});
  const [load, setLoad] = useState('true'); //loader

  //Notificaciones
  const notifyAdd = () => toast.success("Se agrego correctamente el registro");
  const notifyEdit = () => toast.success("Se edito correctamente el registro");
  const notifyDelete = () => toast.success("Se elimino correctamente el registro");

  const BASEURL = "http://personadbrestapi.somee.com/api/persona";

  //Petición GET
  const getPersona = async () => {
    await axios.get(BASEURL)
      .then(resp => {
        setData(resp.data)
      }).catch(err => {
        console.log(err);
      })
  }

  //Petición POST
  const postPersona = async () => {
    delete persona.id;
    persona.edad = parseInt(persona.edad);
    await axios.post(BASEURL, persona)
      .then(resp => {
        setData(data.concat(resp.data)); //Cambia el estado cuando se agrega un nuevo registro
        showCloseModalAdd();  //cerramos el modal una vez que se agrega un registro nuevo
        notifyAdd();
      }).catch(err => {
        console.log(err);
      })
  }

  //Petición PUT
  const putPersona = async () => {
    persona.edad = parseInt(persona.edad);
    await axios.put(BASEURL + "/" + persona.id, persona)
      .then(resp => {

        var respuesta = resp.data;
        var dataAuxiliar = data;

        dataAuxiliar.map(p => {
          if (p.id === persona.id) {
            p.nombre = respuesta.nombre;
            p.apellido = respuesta.apellido;
            p.edad = respuesta.edad;
          }
        })
        showCloseModalEdit(); //cerramos el modal una vez que se edite un registro 
        notifyEdit();
      }).catch(err => {
        console.log(err);
      })
  }

  //Petición DELETE
  const deletePersona = async () => {
    await axios.delete(BASEURL + "/" + persona.id)
      .then(resp => {
        setData(data.filter(p => p.id !== resp.data));
        showCloseModalDelete(); //cerramos el modal una vez que se agrega un registro nuevo
        notifyDelete();
        getPersona() ;
      }).catch(err => {
        console.log(err);
      })
  }

  useEffect(() => {
    getPersona();
  }, [])

  //loader
  setTimeout(() => {
    setLoad(false);
  }, 3000);

  //obtener los input
  const handleChange = e => {
    const { name, value } = e.target;
    setPersona({
      ...persona,
      [name]: value
    });
  }

  const handleSubmit = e => {
    postPersona(); 
    e.preventDefault();
  };

  //controlar el modal insertar
  const showCloseModalAdd = () => {
    setShowModalAdd(!showModalAdd);
  }

  //controlar el modal Editar
  const showCloseModalEdit = () => {
    setShowModalEdit(!showModalEdit);
  }

  //controlar el modal Eliminar
  const showCloseModalDelete = () => {
    setShowModalDelete(!showModalDelete);
  }

  //Selecciona al registro
  const personaSelect = (personaS, caso) => {
    setPersona(personaS);
    (caso === "Editar") ? showCloseModalEdit() : showCloseModalDelete()
  }


  return (

    <div className="App">

      {
        load ?  <Loader
        type="Grid"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
         /> 
         : <PersonaList
         data={data}
         personaSelect={personaSelect.bind(this)}
         showCloseModalAdd={showCloseModalAdd.bind(this)} />   
      }

      <PersonaAdd
        handleSubmit={handleSubmit}
        showModalAdd={showModalAdd}
        handleChange={handleChange.bind(this)}
        showCloseModalAdd={showCloseModalAdd.bind(this)} />

      <PersonaEdit
        showModalEdit={showModalEdit}
        persona={persona}
        handleChange={handleChange.bind(this)}
        putPersona={putPersona.bind(this)}
        showCloseModalEdit={showCloseModalEdit.bind(this)} />

      <PersonaDelete
        showModalDelete={showModalDelete}
        deletePersona={deletePersona.bind(this)}
        showCloseModalDelete={showCloseModalDelete.bind(this)} />

     <ToastContainer/>
    </div>

  )

}

export default PersonaMain
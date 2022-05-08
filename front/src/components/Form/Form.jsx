import React, { useRef, useContext, useState} from 'react'
import Store from '../util/Store'

const HOST_API = "http://localhost:8080/api";


//Formulario
const Form = () => {
    const formRef = useRef(null);
    const { dispatch, state: { todo } } = useContext(Store);
    const item = todo.item;
    const [state, setState] = useState(item);

    const [numero,setNumero] = useState(0);
    

    //Metodo para agregar lista
    const onAdd = (event) => {
      setNumero(numero+1);

      event.preventDefault();
  
      const request = {
        name: state.name,
        id: null,
        completed: false
      };
  
  //Promesa para agregar para transporta el json
      fetch(HOST_API + "/todo", {
        method: "POST",
        body: JSON.stringify(request),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then((todo) => {
          dispatch({ type: "add-item", item: todo });
          setState({ name: "" });
          formRef.current.reset();
        });
    }
  //Funcion para actualizar
    const onEdit = (event) => {
      event.preventDefault();
  
      const request = {
        name: state.name,
        id: item.id,
        isCompleted: item.isCompleted
      };
  
  //Promesa para actualizar
      fetch(HOST_API + "/todo", {
        method: "PUT",
        body: JSON.stringify(request),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then((todo) => {
          dispatch({ type: "update-item", item: todo });
          setState({ name: "" });
          formRef.current.reset();
        });
    }
  
    return<form ref={formRef}>
    <br/>
    <div className='form-group mx-sm-5'>
      <h1 className="display-6">Tareas totales: {numero}</h1>
    <input
      className='form-control'
      type="text"
      name="name"
      placeholder="¿Qué piensas hacer hoy?"
      defaultValue={item.name}
      onChange={(event) => {
        setState({ ...state, name: event.target.value })
      }}  ></input>

    {item.id && <button className="btn btn-success" onClick={onEdit}>Actualizar</button>}
    {!item.id && <button className="btn btn-success" onClick={onAdd}>Crear</button>}
 
    </div>
     </form>
  }
  
  export default Form;
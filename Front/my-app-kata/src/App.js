import React, {
  useContext,
  useReducer,
  createContext,
  useEffect,
  useRef,
  useState
} from "react";

const HOST_API = "http://localhost:8080/api";

//Estados iniciales
const initialState = {
  todo: { list: [], item: {} },
};

//Formulario
const Form = () => {
  const formRef = useRef(null);//refercia de las propiedades de un componente
  const { dispatch} = useContext(Store);
  const [state, setState] = useState(item);//Estados interno del componente

  //Metodo para agregar lista
  const onAdd =(event)=>{
    event.preventDefault();
    const request = {
      name:state.name,
      id:null,
      isComplete:false
    }
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
    })
  }

  return (<form ref={formRef}>
    <input type ='text' name="name" onChange={(event)=>{
      setState({...state, name:event.target.value})
    }}></input>
   
    <button onClick={onAdd}>Agregar</button>
    
  </form>);
}

const Store = createContext(initialState);
//Componente de listar
const List = () => {
  //Contensto para el state
  const { dispatch, state } = useContext(Store); //el store es un almacen donde guardamos los cambios internos de la aplicacion

  useEffect(() => {
    fetch(HOST_API + "/todos") //promesa
      .then((response) => response.json())
      .then((list) => {
        dispatch({ type: "update-list", list }); //Actualiza dependiendo el tipo de accion
      });
  }, [state.list.lengt, dispatch]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>NOMBRE</td>
            <td>¿ESTA COMPLETADO?</td>
          </tr>
        </thead>
        <tbody>
          {state.list.map((todo) => {
            return (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.name}</td>
                <td>{todo.isCompletr}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

//Funcion pura con stado y acccion
function Reducer(state, action) {
  switch (action.type) {
    case "update-item":
      return { ...state, list: action.list };
    case "add-item":
      const newList = state.list;
      newList.push(action.item);
      return { ...state, list: newList };
    default:
      return state;
  }
}

//Conectar entre si diferentes componentes
const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState); //el state es como esta altualmente y dispatch nos orienta sobre los cambios

  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
};

const APP = () => {
  return (
    <StoreProvider>
      <List />
    </StoreProvider>
  );
};

export default APP;

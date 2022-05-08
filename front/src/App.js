import React from "react";
import Form from "./components/Form/Form";
import { StoreProvider } from "./components/util/Store";
import List from "./components/List/List";

function App() {
  return (
    <StoreProvider>
      <div className="container">
        <h1 className="display-6 text-center">To-Do List</h1>
          <br />
          <div className="panel-body border rounded">
            <h3 className="display-10 text-center">Agregando Tarea</h3>
            <Form />
          </div>
        <List />
      </div>
    </StoreProvider>
  );
}

export default App;

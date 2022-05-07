import React from 'react';
import Form from './components/Form/Form';
import { StoreProvider } from './components/util/Store';
import List from './components/List/List';

function App() {
  return <StoreProvider>
    <h3>To-Do List</h3>
    <Form />
    <List />
  </StoreProvider>
}

export default App;

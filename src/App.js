import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import BookList from './Components/BookList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Consonance Book Data</h1>
      </header>

      <BookList />
    </div>
  );
}

export default App;

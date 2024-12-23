import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import Checkbox from "./components/Checkbox/Checkbox";
import FormGroup from "./components/FormGroup/FormGroup";
import Actions from "./components/Actions/Actions";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <div className="main-container">
        <Sidebar />
        <main className="content">
          <h2 className="user">Utilizador</h2>

          <Card title="Tipo de utilizador">
            <Checkbox label="Project Manager" />
            <Checkbox label="Developer" checked />
            <Checkbox label="Architect" checked />
          </Card>

          <Card title="Contacto">
            <div className="form-grid">
              <FormGroup label="Email" type="email" />
              <FormGroup label="Palavra-passe" type="password" />
              <FormGroup label="Telefone" type="text" />
            </div>
          </Card>

          <Actions />
        </main>
      </div>
    </div>
  );
};

export default App;

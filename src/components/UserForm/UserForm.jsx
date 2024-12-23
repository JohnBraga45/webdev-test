import React, { useState } from "react";
import "./UserForm.css";

function UserForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("+351");

  return (
    <div className="user-form">
      <div className="card">
        <div className="card-header">Contacto</div>
        <div className="card-body">
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
              className="contact-input"
              placeholder="Digite seu email"
              required

            />
          </div>
          <div className="form-group">
            <label>Palavra-passe</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
              className="contact-input"
              placeholder="Digite sua palavra-passe"
              required

            />
          </div>
          <div className="form-group">
            <label>Telefone</label>
            <input
              type="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)} 
              className="contact-input"
              placeholder="Digite seu telefone"
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserForm;

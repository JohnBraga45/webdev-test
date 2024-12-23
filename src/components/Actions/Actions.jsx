import React from "react";
import "./Actions.css";

const Actions = () => {
  const handleCancelClick = () => {
    alert("Ação de cancelar");
   };

  const handleSaveClick = () => {
    alert("Ação de salvar");
   };

  return (
    <div className="actions">
      <button type="button" className="btn cancel" onClick={handleCancelClick}>
        Cancelar
      </button>
      <button type="button" className="btn save" onClick={handleSaveClick}>
        GUARDAR
      </button>
    </div>
  );
};

export default Actions;

import React from "react";
import '../style-sheets/Button.css';

function Button({ texto, esBotonClick, esBotonClick2, manejarClick }) {
  return (
    <button
      className={esBotonClick ? 'boton-aumentar' : esBotonClick2 ? 'boton-reiniciar' : 'boton-restar'}

      onClick={manejarClick}>

      {texto}


    </button>
  );
}



export default Button;
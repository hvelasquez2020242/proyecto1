import React from "react";
import '../style-sheets/numero.css'

function Contador({ numero, esNumero }) {

    if (numero >= 1) {
        return (




            <div className='numero-positivo'>
                {numero}

            </div>

        );
    } if (numero === 0) {
        return (
            <div className='contador'>
                {numero}

            </div>

        );
    }
    else {
        return (




            <div className='numero-negativo'>
                {numero}

            </div>

        );
    }



}

export default Contador;
import React from 'react';
import alimentacao from "../assets/images/alimentacao.svg"
import outros from "../assets/images/outros.svg"
import saude from "../assets/images/saude.svg"
import transporte from "../assets/images/transporte.svg"
import utilidades from "../assets/images/utilidades.svg"
import { IconeTema } from './UI';


export default (type) => {
    const images ={
        Restaurante:<IconeTema src={alimentacao} alt={type}/>,
        Utilidades:<IconeTema src={utilidades} alt={type}/>,
        Saude:<IconeTema src={saude} alt={type}/>,
        Transporte:<IconeTema src={transporte} alt={type}/>,
        default:<IconeTema src={outros} alt="Outros"/>
    }

    return images[type]|| images.default;
}
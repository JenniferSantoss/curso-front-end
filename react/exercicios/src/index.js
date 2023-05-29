import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Primeiro from './componentes/Primeiro';
import BomDia from './componentes/BomDia';

import Pai from './componentes/Pai';

import { BoaTarde, BoaNoite } from './componentes/Multiplos';

import Saudacao from './componentes/Saudacao';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Primeiro />
    <BomDia nome="Guilherme"/>
    <BoaTarde nome="Ana" />
    <BoaNoite nome="Bia" />
    <Saudacao tipo="Bom dia" nome="Joao"/>
    <Pai nome="Paulo" sobrenome="Silva"/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from "./App.jsx" //Para poder importar el componente, es necesario exportarlo en el archivo, y luego importarlo aquí para poder usarlo con llaves {}.
import './index.css'


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <App/>
)


import React from 'react'
import ReactDOM from 'react-dom'
import "bootstrap/dist//css/bootstrap.min.css"

import Content from './Content.js'
import './index.css'

import ceviche from './ceviche.jpg'
import lomo from './lomo.jpg'
import aji from './aji.jpg'
import causa from './causa.jpg'
import arrozconpollo from './arrozconpollo.jpg'
import chaufa from './chaufa.jpg'
import broaster from './broaster.jpg'
import brasa from './brasa.jpg'
import tallarinesrojos from './tallarinesrojos.jpg'
import lupa from './lupa.svg'
import logo from './logo.jpg'

const App = () =>{
  const title = 'Menú'
  const plato1 = 'Ceviche'
  const plato2 = 'Lomo Saltado'
  const plato3 = 'Aji de Gallina'
  const plato4 = 'Causa Rellena'
  const plato5 = 'Arroz con Pollo'
  const plato6 = 'Arroz Chaufa'
  const plato7 = 'Pollo Broaster'
  const plato8 = 'Pollo a la Brasa'
  const plato9 = 'Tallarines Rojos'
  return(
    <div className="container">
      <img src={logo} id="b"/>
      <Content title={title}/>
      <input type="search" placeholder="Busca tu plato" id="Buscador"/>
      <img src={lupa} id="d"/>
      <br/><br/>
      <table className="table">
        <tbody className="a">
          <tr>
            <td><a href="" id="c"><img src={ceviche}/><Content plato1={plato1}/></a></td>
            <td><a href="" id="c"><img src={lomo}/><Content plato2={plato2}/></a></td>
            <td><a href="" id="c"><img src={aji}/><Content plato3={plato3}/></a></td>          
          </tr>
          <tr>           
            <td><a href="" id="c"><img src={causa}/><Content plato4={plato4}/></a></td>
            <td><a href="" id="c"><img src={arrozconpollo}/><Content plato5={plato5}/></a></td>
            <td><a href="" id="c"><img src={chaufa}/><Content plato6={plato6}/></a></td>
          </tr>
          <tr>
            <td><a href="" id="c"><img src={broaster}/><Content plato7={plato7}/></a></td>
            <td><a href="" id="c"><img src={brasa}/><Content plato8={plato8}/></a></td>
            <td><a href="" id="c"><img src={tallarinesrojos}/><Content plato9={plato9}/></a></td>
          </tr>
        </tbody>
      </table>
      
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

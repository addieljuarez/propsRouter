import React from 'react';

import Login from './vistas/Login';
import Registro from './vistas/Registro';
import VistaPrincipal from './vistas/vistaPrincipal'




export default class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      sesion: 0,
    }

    // sesion: 0  // aun no hay nada por lo cual entra al login
    // sesion: 1  // ya hizo login y entra a la vista principal
    

  }

  
  componentWillMount(){
    var sesion = localStorage.getItem('sesion');
    // if(sesion == null){
      localStorage.setItem('sesion', 1);
    // }

    sesion = localStorage.getItem('sesion');
    console.log(sesion);
    this.setState({
      sesion: Number(sesion),
    });

    console.log(this.state.sesion);
    
  }

  render(){
    console.log(this.state.sesion);
    if(this.state.sesion === 0){
      return(
        <Login />
      );
    }else{
      return(
        <VistaPrincipal />
      );
    }
  }

}
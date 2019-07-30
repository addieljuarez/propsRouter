/**
 * File: /Users/addielJuarez/Documents/developer/react/argumentos/src/vistas/vistaPrincipal.js
 * Project: /Users/addielJuarez/Documents/developer/react/argumentos
 * Created Date: Monday, July 29th 2019, 7:35:44 pm
 * Author: Addiel Juarez
 * -----
 * Last Modified: Mon Jul 29 2019
 * Modified By: Addiel Juarez
 * -----
 * Copyright (c) 2019 Addiel
 * ------------------------------------
 */


import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Description  from './Description';


export default class VistaPrincipal extends Component{
    constructor(props){
        super(props);
        this.state = {
            color: 'pink'
        }
    }

    cambiaEnPrincipal(){
        this.setState({
            color: 'blue',
        });
    }

    render(){
        return(
            <Router>
                <div style={{backgroundColor:this.state.color }}>
                    <h1>VistaPrincipal</h1>
                    <br></br>
                    <Link to="/Description">About</Link>
                </div>

                <Route path="/Description"  
                
                    render={ (props) => <Description {...props}  parametro={'textoPrueba'} cambia={this.cambiaEnPrincipal.bind(this)}  /> } 
                
                />
            </Router>
            
        );
    }
}


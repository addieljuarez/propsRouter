import React, {Component} from 'react';


export default class Description extends Component{

    constructor(props){
        super(props);
        console.log(props);
    }

    cambia(){
        this.props.cambia();
    }

    render(){
        return(
            <div>
                Description
                <br></br>
                <h1>{this.props.parametro}</h1>
                <br></br>
                <button 
                    onClick={this.cambia.bind(this)}
                >cambia color</button>
            </div>
        );
    }
}


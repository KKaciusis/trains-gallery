import React, { Component } from "react";

class Img extends Component{
    render(){
        return (
        <div className="img-holder">
            <h1>Cow Titties</h1>
            <img style = {{width: '400px', height:'300px'}} src="../img/01.jpg" alt="Papa smurf cleans train."/>
        </div>
        );

    }
}

export default Img;
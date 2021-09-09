import React, { Component } from "react";

class Img extends Component{
    constructor (props){
        super(props);
    }
    render(){
        return (
        <div className="img-holder">
            <p>{this.props.desc}</p>
            <img src={this.props.src}/>
        </div>
        );

    }
}

export default Img;
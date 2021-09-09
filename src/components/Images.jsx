import React, { Component } from "react";
import Img from "./Img";
import LrgImg from "./Lrgimg";

class Images extends Component{
    render(){
        return (
            <div className="wrapper">
                <h3>this is from images.jsx</h3>
                <Img/>
            </div>
        );

    }
}

export default Images;
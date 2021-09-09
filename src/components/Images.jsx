import React, { Component } from "react";
import Img from "./Img";
import LrgImg from "./Lrgimg";
import './images.css';

class Images extends Component{
    constructor(props){
        super(props);
        this.state = {
            imgLst: [
                {imgSrc: '../img/01.jpg', desc: 'Papa smurf cleans train.'},
                {imgSrc: '../img/02.jpg', desc: 'X4449 on the route.'},
                {imgSrc: '../img/03.jpg', desc: 'Big black-red beast.'},
                {imgSrc: '../img/04.jpg', desc: 'Green arrow starts engine.'},
                {imgSrc: '../img/05.jpg', desc: 'Long way home.'},
                {imgSrc: '../img/06.jpg', desc: 'Montain Daytrip in Switzerland.'},
                {imgSrc: '../img/07.jpg', desc: 'Red Darf at work.'},
                {imgSrc: '../img/08.jpg', desc: 'Funny blue train on bridge.'},
                {imgSrc: '../img/09.jpg', desc: 'Still working in Alaska mine.'},
                {imgSrc: '../img/10.jpg', desc: 'Water and train- both green.'},
                {imgSrc: '../img/11.jpg', desc: 'Rainy day in nowhere.'},
                {imgSrc: '../img/12.jpg', desc: 'Star train waiting for passengers.'}
            ],
            imgStyle: {
                imgListConStyle:{
                    display: 'flex'
                }
            },
            lrgImg: {}
        }
    }
    render(){
        let imageItemList = this.state.imgLst.map(image => {
            return (
                <button onClick="" style={{background: 'none', border:  'none'}} key={image.imgSrc[0]}><Img src={image.imgSrc}/></button>
            );
        });
        return (
        <React.Fragment>
            <div className="wrapper" style={this.state.imgStyle.imgListConStyle}>
                {imageItemList}
            </div>
        </React.Fragment>
        );

    }
}

export default Images;
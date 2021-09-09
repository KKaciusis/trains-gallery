import React from 'react';

const LrgImg = (props) =>{
    return (
        <div>
            <div className="lg-img-hldr">
                <div className="top-bar">
                    <a  onClick=""><img src={props.src} className="close-icon" alt="This is close icon"/></a>
                </div>
                <img src="" alt="" />
                <div className="bottom-bar">
                    <div className="descriptions">{props.description}</div>
                </div>
            </div>
        </div>
    );
}

export default LrgImg;
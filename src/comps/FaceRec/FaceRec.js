import React from 'react';
import './FaceRec.css';


function FaceRec(props) {
    return (
       <div className="center ma">
        <div className="absolute mt2">
            <img id='inputImage' src={props.imgUrl} alt="/" width='500px' height='auto'/>
            <div  className='boundingBox' style={{top: props.box.topRow, right: props.box.rightCol, bottom: props.box.bottomRow, left: props.box.leftCol }}></div>
        </div>    
       </div> 
        
    )
}

export default FaceRec

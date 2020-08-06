import React from 'react'
import Tilt from 'react-tilt'
import './Logo.css';
import face from '../../assets/face.png'

function Logo() {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt" options={{ max : 25 }} style={{ height: 100, width: 100 }} >
            <div className="Tilt-inner"> <img src={face} alt='face'/></div>
            </Tilt>
        </div>
    )
}

export default Logo

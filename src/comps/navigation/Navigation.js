import React from 'react'

function Navigation(props) {
    return (

        <nav style={{display: 'flex', justifyContent:'flex-end'}}>
            <p 
            className='f3 link dim black underline pa3 pointer' 
            onClick={() => props.signInOut('signin') }>
            Sign Out
            </p>
        </nav>
        
    )
}

export default Navigation

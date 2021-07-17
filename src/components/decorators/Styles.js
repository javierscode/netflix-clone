import React from 'react'
import './../../styles/index.css'

const Styles = ({children}) => {
    return (
        <div style={{ display: 'block', marginTop: '2rem'}}>
            {children}
        </div>
    )
}

export default Styles
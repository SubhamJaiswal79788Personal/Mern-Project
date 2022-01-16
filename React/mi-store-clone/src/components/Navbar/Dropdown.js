import React from 'react'
import style from './../../styles/FirstNavbar.module.css'
function dropdown(props) {
    return (
        <div className={style.dropdown}>
            {props.items.map(element => {return(<a>{element}<hr></hr></a>)})}
        </div>
    )
    }

export default dropdown

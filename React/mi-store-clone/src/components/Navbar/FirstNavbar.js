import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import style from './../../styles/FirstNavbar.module.css'
import Dropdown from './Dropdown'
function FirstNavbar() {

    const number = 0;
    const [storeState, setstore] = useState(false);

    const showDropdown = () => {
        console.log('toggleHandler');
        setstore(true);
    }

    const hideDropdown = () => {
        console.log('toggleHandler');
        setstore(false);
    }

    return (
        <nav className={style['navbar-container']}>
            <div>
                <a href="https://www.mi.com/in/">XIAOMI INDIA | </a>
                <a href="https://in.event.mi.com/in/install-mi-store">GET MI STORE APP | </a>
                <a href="https://www.mi.com/in/service/help/#category_id=1&pagenum=1&channel=1">ONLINE HELP | </a>
                <span onMouseEnter={showDropdown}
                    onMouseLeave={hideDropdown} className={style['cursor-pointer']}> <a href="https://www.mi.com/in/service/authorized_stores/">RETAIL STORE</a>
                    <FontAwesomeIcon icon={faAngleDown} className={style['color-white']} />

                    {storeState && <Dropdown items={['Mistudio1', 'Mistudio2', 'Mistudio3']} />}</span>





            </div>

            <div>
                <a href="">SIGN IN</a>
                <a href="">SIGN UP</a>
                <a href="">CART({number})</a>

            </div>

        </nav>
    )
}

export default FirstNavbar

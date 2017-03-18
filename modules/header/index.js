import React, { Component } from 'react'
import Login from './user-login'
import Brand from './brand'
import Logo from '../../assets/images/timg.jpg'
import Styles from './css/index.css'

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Brand brandCss = {Styles['logo']} brandName="CNiu" brandLogoSrc={Logo} />
                <Login />
            </div>
        );
    }
}

export default Header;
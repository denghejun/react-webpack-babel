import React, { Component } from 'react'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
    }

    handleLoginClick(e) {
        alert('ok!');
    }

    render() {
        return (
            <div className={this.props.loginCss}>
                <span>Hello guest! Please </span>
                <a onClick={this.handleLoginClick} href="#">Login</a>
            </div>
        );
    }
}

export default Login;
import React, { Component } from 'react';
class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = { userNameDesc: '', userPasswordDesc: '', currentDate: new Date().toString() };
        this.handleUserNameChange = this.handleUserNameChange.bind(this);
        this.handleUserPasswordChange = this.handleUserPasswordChange.bind(this);
    }

    // 这里用ES6的箭头式写法，可以保证tick函数中的this指向的是class User。
    // 或者也可以在构造函数中写：this.tick = this.tick.bind(this),返回一个作用域是class的funtion，就可以直接使用了。
    componentDidMount() {
        this.timerId = setInterval(() => {this.tick()}, 1000);
    }

    componentWillUnmount() {
        if (this.timerId !== undefined) {
            clearInterval(this.timerId);
        }
    }

    tick() {
        this.setState({
            currentDate: new Date().toString()
        });
    }

    handleUserNameChange(event) {
        this.setState({
            userNameDesc: event.target.value + ' is a good name.'
        });
    }

    handleUserPasswordChange(event) {
        this.setState({
            userPasswordDesc: event.target.value + ' is a good password.'
        });
    }

    render() {
        return (
            <div >
                <div>
                    <input type="text" ref="userName" onChange={this.handleUserNameChange}></input>
                    <span>{this.state.userNameDesc}</span>
                </div>
                <div>
                    <input type="text" ref="userPassword" onChange={this.handleUserPasswordChange}></input>
                    <span>{this.state.userPasswordDesc}</span>
                </div>
                <h1 className = {this.props.fontColor}>
                    {this.state.currentDate}
                </h1>
            </div>
        );
    }
}

export default User;
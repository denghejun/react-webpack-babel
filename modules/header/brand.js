import React, { Component } from 'react';
class Brand extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <img className={this.props.brandCss} src={this.props.brandLogoSrc} />
                <h3>{this.props.brandName}</h3>
            </div>
        );
    }
}

export default Brand;
import React, { Component } from 'react';
import loginImage from "../../../static/assets/images/auth/login.jpg";

export default class Auth extends Component {
    render() {
        return (
            <div className = "auth-page-wrapper">
                <div 
                className = "left-side"
                style = {{
                    backgroundImage: `url(${loginImage})`
                }}
                />

                <div className = "right-side">
                    <h1>Login component goes here...</h1>
                </div>
            </div>
        );
    }
}
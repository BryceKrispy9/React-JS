import React, { Component } from 'react';
import Login from "../auth/login";
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
                    <Login />
                </div>
            </div>
        );
    }
}
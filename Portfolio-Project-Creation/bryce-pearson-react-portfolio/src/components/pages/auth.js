import React, { Component } from "react";
import Login from "../auth/login";
import loginImage from "../../../static/assets/images/auth/login.jpg";

export default class Auth extends Component {
	constructor(props) {
		super(props);

		this.handleSuccesfulAuth = this.handleSuccesfulAuth.bind(this); // Do this everything you pass a method down through
		this.handleUnsuccesfulAuth = this.handleUnsuccesfulAuth.bind(this);
	}

	handleSuccesfulAuth() {
		this.props.handleSuccesfulLogin();
		this.props.history.push("/"); // Pushes them to the root route (Homepage)
	}

	handleUnsuccesfulAuth() {
		this.props.handleUnsuccessfulLogin();
	}

	render() {
		return (
			<div className="auth-page-wrapper">
				<div
					className="left-side"
					style={{
						backgroundImage: `url(${loginImage})`,
					}}
				/>

				<div className="right-side">
					<Login
						handleSuccesfulAuth={this.handleSuccesfulAuth}
						handleUnsuccesfulAuth={this.handleUnsuccesfulAuth}
					/>
				</div>
			</div>
		);
	}
}

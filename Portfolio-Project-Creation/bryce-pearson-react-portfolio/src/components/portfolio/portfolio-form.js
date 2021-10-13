import React, { Component } from "react";

export default class PortfolioForm extends Component {
	// Forms that use a state should use class component
	constructor(props) {
		super(props);

		this.state = {
			name: "",
			description: "",
			category: "",
			position: "",
			url: "",
			thumb_image: "",
			banner_image: "",
			logo: "",
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value, // Updates state when typing in Portfolio form
		});
	}

	handleSubmit(event) {
		console.log("event", event);
		event.preventDefault(); // Prevents refresh of page - A synthetic event (Document Object Module {DOM}) has divs, h1 tags, etc., like a normal HTML event. This is a virtual event (Also works with the DOM) and allows for better performance
	}

	render() {
		return (
			<div>
				<h1>PortfolioForm</h1>

				<form onSubmit={this.handleSubmit}>
					<div>
						<input
							type="text"
							name="name"
							placeholder="Portfolio Item Name"
							value={this.state.name}
							onChange={this.handleChange}
						/>

						<input
							type="text"
							name="url"
							placeholder="URL"
							value={this.state.url}
							onChange={this.handleChange}
						/>
					</div>

					<div>
						<input
							type="text"
							name="position"
							placeholder="Position"
							value={this.state.position}
							onChange={this.handleChange}
						/>

						<input
							type="text"
							name="category"
							placeholder="Category"
							value={this.state.category}
							onChange={this.handleChange}
						/>

						<div>
							<input
								type="text"
								name="description"
								placeholder="Description"
								value={this.state.description}
								onChange={this.handleChange}
							/>
						</div>
					</div>

					<div>
						<button type="submit">Save</button>
					</div>
				</form>
			</div>
		);
	}
}

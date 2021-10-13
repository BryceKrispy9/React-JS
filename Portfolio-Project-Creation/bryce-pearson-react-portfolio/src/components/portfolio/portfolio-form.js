import React, { Component } from "react";
import axios from "axios";

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

	buildForm() {
		let formData = new FormData(); // Create a new form data object

		formData.append("portfolio_item[name]", this.state.name); // API expects an object - portfolio_item is named this in the API
		formData.append("portfolio_item[description]", this.state.description);
		formData.append("portfolio_item[url]", this.state.url);
		formData.append("portfolio_item[category]", this.state.category);
		formData.append("portfolio_item[position]", this.state.position);

		return formData; // Return the completed full object that has the key vaulued pairs above
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value, // Updates state when typing in Portfolio form
		});
	}

	handleSubmit(event) {
		axios
			.post(
				"https://brycepearson.devcamp.space/portfolio/portfolio_items", // API enpoint
				this.buildForm(), // Add in all the data from the buildform state
				{ withCredentials: true } // Server needs to recognize who this is coming from
			)
			.then((response) => {
				console.log("response", response);
			})
			.catch((error) => {
				console.log("portfolio form handleSubmit error", error);
			});

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

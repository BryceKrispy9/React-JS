import React, { Component } from "react";
import axios from "axios";
import DropzoneComponent from "react-dropzone-component";

import "../../../node_modules/react-dropzone-component/styles/filepicker.css";
import "../../../node_modules/dropzone/dist/min/dropzone.min.css";

export default class PortfolioForm extends Component {
	// Forms that use a state should use class component
	constructor(props) {
		super(props);

		this.state = {
			name: "",
			description: "",
			category: "Telecommunications",
			position: "",
			url: "",
			thumb_image: "",
			banner_image: "",
			logo: "",
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.componentConfig = this.componentConfig.bind(this);
		this.djsConfig = this.djsConfig.bind(this);
		this.handleThumbDrop = this.handleThumbDrop.bind(this);
		this.handleBannerDrop = this.handleBannerDrop.bind(this);
		this.handleLogoDrop = this.handleLogoDrop.bind(this);
	}

	handleThumbDrop() {
		// Passes to dropzone component - when file is dropped on component, will look in addedfile and see what files I have access to
		return {
			addedfile: (file) => this.setState({ thumb_image: file }),
		};
	}

	handleBannerDrop() {
		return {
			addedfile: (file) => this.setState({ banner_image: file }),
		};
	}

	handleLogoDrop() {
		return {
			addedfile: (file) => this.setState({ logo: file }),
		};
	}

	componentConfig() {
		return {
			iconFiletypes: [".jpg", ".png"],
			showFiletypeIcon: true,
			postUrl: "https://httpbin.org/post", // Allows you to call it without looking at data using different http verbs (Will always return true)
		};
	}

	djsConfig() {
		return {
			addRemoveLinks: true,
			maxFiles: 1,
		};
	}

	buildForm() {
		let formData = new FormData(); // Create a new form data object

		formData.append("portfolio_item[name]", this.state.name); // API expects an object - portfolio_item is named this in the API
		formData.append("portfolio_item[description]", this.state.description);
		formData.append("portfolio_item[url]", this.state.url);
		formData.append("portfolio_item[category]", this.state.category);
		formData.append("portfolio_item[position]", this.state.position);

		if (this.state.thumb_image) {
			formData.append(
				"portfolio_item[thumb_image]",
				this.state.thumb_image
			);
		}

		if (this.state.banner_image) {
			formData.append(
				"portfolio_item[banner_image]",
				this.state.banner_image
			);
		}

		if (this.state.logo) {
			formData.append("portfolio_item[logo]", this.state.logo);
		}

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
				this.props.handleSuccessfulFormSubmission(
					response.data.portfolio_item
				);
				console.log("response", response);
			})
			.catch((error) => {
				console.log("portfolio form handleSubmit error", error);
			});

		event.preventDefault(); // Prevents refresh of page - A synthetic event (Document Object Module {DOM}) has divs, h1 tags, etc., like a normal HTML event. This is a virtual event (Also works with the DOM) and allows for better performance
	}

	render() {
		return (
			<form
				onSubmit={this.handleSubmit}
				className="portfolio-form-wrapper"
			>
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

					<select // Drop down with categories
						name="category"
						value={this.state.category}
						onChange={this.handleChange}
						className="select-element"
					>
						<option value="Telecommunications">
							Telecommunications
						</option>
						<option value="custom-websites">Custom Websites</option>
						<option value="Github">Github</option>
					</select>

					<div>
						<textarea
							type="text"
							name="description"
							placeholder="Description"
							value={this.state.description}
							onChange={this.handleChange}
						/>
					</div>
				</div>

				<div className="image-uploaders">
					<DropzoneComponent
						config={this.componentConfig()}
						djsConfig={this.djsConfig()}
						eventHandlers={this.handleThumbDrop()}
					></DropzoneComponent>

					<DropzoneComponent
						config={this.componentConfig()}
						djsConfig={this.djsConfig()}
						eventHandlers={this.handleBannerDrop()}
					></DropzoneComponent>

					<DropzoneComponent
						config={this.componentConfig()}
						djsConfig={this.djsConfig()}
						eventHandlers={this.handleLogoDrop()}
					></DropzoneComponent>
				</div>

				<div>
					<button type="submit">Save</button>
				</div>
			</form>
		);
	}
}

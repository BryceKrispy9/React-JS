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
			editMode: false,
			apiURL: "https://brycepearson.devcamp.space/portfolio/portfolio_items",
			apiAction: "post",
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.componentConfig = this.componentConfig.bind(this);
		this.djsConfig = this.djsConfig.bind(this);
		this.handleThumbDrop = this.handleThumbDrop.bind(this);
		this.handleBannerDrop = this.handleBannerDrop.bind(this);
		this.handleLogoDrop = this.handleLogoDrop.bind(this);

		this.thumbRef = React.createRef();
		this.bannerRef = React.createRef();
		this.logoRef = React.createRef();
	}

	componentDidUpdate() {
		// React lifecycle hook
		if (Object.keys(this.props.portfolioToEdit).length > 0) {
			// Grab props - is it empty? If it is, skip process - else? Grab records and store them in a local variable
			const {
				id,
				name,
				description,
				category,
				position,
				url,
				thumb_image_url,
				banner_image_url,
				logo_url,
			} = this.props.portfolioToEdit;

			this.props.clearPortfolioToEdit(); // Clears so the above object does not pop up again (Will fire everytime there is something inside the component)

			this.setState({
				// Calls local state in portfolio form
				id: id,
				name: name || "", // Nill check - "||" means "or" (If there's a name, put name in there, else, empty string)
				description: description || "",
				category: category || "Telecommunications",
				position: position || "",
				url: url || "",
				editMode: true, // If editing, change these 3 settings
				apiURL: `https://brycepearson.devcamp.space/portfolio/portfolio_items/${id}`,
				apiAction: "patch",
			});
		}
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
		axios({
			method: this.state.apiAction, // Passed in config object with a key value setup
			url: this.state.apiURL,
			data: this.buildForm(),
			withCredentials: true,
		})
			// axios
			// 	.post(
			// 		"https://brycepearson.devcamp.space/portfolio/portfolio_items", // API endpoint
			// 		this.buildForm(), // Add in all the data from the buildform state
			// 		{ withCredentials: true } // Server needs to recognize who this is coming from
			// 	)
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
				<div className="two-column">
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

				<div className="two-column">
					<input
						type="text"
						name="position"
						placeholder="Position"
						value={this.state.position}
						onChange={this.handleChange}
					/>

					<select
						name="category"
						value={this.state.category}
						onChange={this.handleChange}
						className="select-element"
					>
						<option value="eCommerce">eCommerce</option>
						<option value="Scheduling">Scheduling</option>
						<option value="Enterprise">Enterprise</option>
					</select>
				</div>

				<div className="one-column">
					<textarea
						type="text"
						name="description"
						placeholder="Description"
						value={this.state.description}
						onChange={this.handleChange}
					/>
				</div>

				<div className="image-uploaders">
					<DropzoneComponent
						ref={this.thumbRef}
						config={this.componentConfig()}
						djsConfig={this.djsConfig()}
						eventHandlers={this.handleThumbDrop()}
					>
						<div className="dz-message">Thumbnail</div>
					</DropzoneComponent>

					<DropzoneComponent
						ref={this.bannerRef}
						config={this.componentConfig()}
						djsConfig={this.djsConfig()}
						eventHandlers={this.handleBannerDrop()}
					>
						<div className="dz-message">Banner</div>
					</DropzoneComponent>

					<DropzoneComponent
						ref={this.logoRef}
						config={this.componentConfig()}
						djsConfig={this.djsConfig()}
						eventHandlers={this.handleLogoDrop()}
					>
						<div className="dz-message">Logo</div>
					</DropzoneComponent>
				</div>

				<div>
					<button className="btn" type="submit">
						Save
					</button>
				</div>
			</form>
		);
	}
}

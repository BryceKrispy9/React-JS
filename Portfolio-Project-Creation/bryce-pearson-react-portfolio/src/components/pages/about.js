import React from "react";
import profilePicture from "../../../static/assets/images/bio/Profile.png";

export default function () {
	return (
		<div className="content-page-wrapper">
			<div
				className="left-column"
				style={{
					background: "url(" + profilePicture + ") no-repeat",
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			/>
			<div className="right-column">
				My name is Bryce Pearson and I am a new software developer!
				Here's a little about me. Technical experience gained through
				working on multiple servers daily at Xima Software. Highest call
				taker and ticket solver for multiple months. Experience using
				skills such as SQL, Linux, and software installations.
				Experience using coding languages such as HTML, CSS, SCSS,
				Python, JavaScript, Git, ReactJS and some Java through Bottega
				University. Strong leadership skills from serving in positions
				of responsibility as LDS missionary in Tijuana, Mexico (District
				and Zone Leader). Gained more experience in working as part of a
				team in the workplace, at 1800 Contacts; obtaining 4 company
				records in speed through competition. Consistency in being the
				top-performer on the team at 1800 contacts. Also gained strong
				situational awareness and team skills, especially under
				pressure, as a professional lifeguard for 3 years. Excellent
				presentation and communication skills. Obtained rank of Eagle
				Scout in Boy Scouts of America in 2010.
			</div>
		</div>
	);
}

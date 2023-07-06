import React from "react";
import Navigation from "../Navigation/Navigation";
import './Header.css'; // Import the CSS file for styles

function Header(props) {
	const { currentTab, setCurrentTab } = props;

	return (
		<header>
			<div className="logo-title">
				Portfolio
			</div>
			<div className="header-nav">
				<Navigation
					currentTab={currentTab}
					setCurrentTab={setCurrentTab}
				></Navigation>
			</div>
		</header>
	);
}

export default Header;

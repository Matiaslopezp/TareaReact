import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import Navbar from "./navbar.jsx";

//create your first component
const Home = () => {
	return (
		<div className="container-fluid">
			<Navbar/>
			
		</div>
	);
};

export default Home;

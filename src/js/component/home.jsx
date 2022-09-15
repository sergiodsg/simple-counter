import React from "react";
import Number from "./Number.jsx";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	console.log(props.digits);
	return (
		<div className="row justify-content-center bg-dark py-3">
			<div className="col-1">
				<FontAwesomeIcon className="text-light fs-1 m-auto" icon={ faClock } />
			</div>
			<Number seconds={Math.floor((props.digits/100000))%10}/>
			<Number seconds={Math.floor((props.digits/10000))%10}/>
			<Number seconds={Math.floor((props.digits/1000))%10}/>
			<Number seconds={Math.floor((props.digits/100))%10}/>
			<Number seconds={Math.floor((props.digits/10))%10}/>
			<Number seconds={props.digits%10}/>
		</div>
	);
};

Home.propTypes = {
    digits: PropTypes.number
}


export default Home;

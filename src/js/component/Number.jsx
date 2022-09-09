import React from "react";
import PropTypes from 'prop-types';

const Number = props => {
    return(<span>{props.seconds}</span>);
}

Number.propTypes = {
    seconds: PropTypes.number
}

export default Number;
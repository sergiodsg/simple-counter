import React from "react";
import PropTypes from 'prop-types';

const Number = props => {
    return(<div className="col-1 text-center fs-2 text-light">{props.seconds}</div>);
}

Number.propTypes = {
    seconds: PropTypes.number
}

export default Number;
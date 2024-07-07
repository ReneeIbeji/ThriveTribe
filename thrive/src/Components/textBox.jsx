import React from "react";
import PropTypes from "prop-types";

export default class textBox extends React.Component{
    static propTypes = {
        placeholder: PropTypes.string,
    };

    render() {
        return (
            <input type="text" placeholder={this.props.placeholder}></input>
        );
    }
}
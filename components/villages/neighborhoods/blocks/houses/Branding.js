import React from 'react';
import ReactDOM from 'react-dom';
import {Link } from 'react-router-dom'
class Branding extends React.Component {
  render() {
    return (
      <Link to="/">
        <img className="branding" src="./images/Branding.svg" />
      </Link>
    )
  }
}

module.exports = Branding;

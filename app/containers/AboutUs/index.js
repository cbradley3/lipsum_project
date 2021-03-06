/*
 *
 * AboutUs
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

import './style.css';
import './styleM.css';

export default class AboutUs extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <Helmet title="AboutUs" meta={[ { name: 'description', content: 'Description of AboutUs' }]}/>

        //Remove this line and you can start writing your code here.
      </div>
    );
  }
}

AboutUs.contextTypes = {
  router: React.PropTypes.object
};

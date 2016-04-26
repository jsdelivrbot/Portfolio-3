import React from 'react';
import NavBar from './navbar';
import LandingPage from './landingpage';
import Content from './content';
require('bootstrap');
require('bootstrap-webpack');
require('../../styles/style.scss');



export default () => {
  return (
    <div>
      <NavBar />
      <LandingPage />
      <Content />
    </div>
  );
}

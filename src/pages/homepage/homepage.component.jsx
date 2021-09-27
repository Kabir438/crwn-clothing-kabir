import React from 'react';

import Directory from '../../components/directory/directory.component';

import './homepage.styles.scss';

class HomePage extends React.Component {
  constructor() {
    super()
    document.title = 'Home - Crown Clothing';
    document.querySelector('link[rel="shortcut icon"]').href = "./crown.svg"
  }
  render() {
      return (
      <div className='homepage'>
        <Directory />
      </div>
    )
  }
};

export default HomePage;

import React from 'react';
import { Link } from 'react-router-dom';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <div>
          <h2>Welcome To FlashCards!</h2>
          <h3>Create new flash cards with the <Link to="/editor">Card Editor</Link>!</h3>
          <h3>Or view your cards with the <Link to="/viewer">Card Viewer</Link>!</h3>
      </div>
    )
  }
}

export default Homepage;
import React from 'react';
import './CardEditor.css';
import { Link, withRouter } from 'react-router-dom';
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';

class Homepage extends React.Component {
  render() {
    let decks;
    if (!isLoaded(this.props.decks)) {
      decks = <div>Loading...</div>
    } else if (isEmpty(this.props.decks)) {
      decks = <div>No decks found</div>
    } else {
      const keys = Object.keys(this.props.decks);
      decks = keys.map(
        key => {
        const name = this.props.decks[key].name;
        return(
          <div><Link to={`/viewer/${key}`}>{name}</Link></div>
        )}
      )
    }

    return (
      <div>
        <h1>Welcome to Flash Cards</h1>
        <h2>To create a new deck of cards, click below</h2>
        <br/>
        <Link to="/editor">Create New Deck</Link><br/>
        <br/>
        <h2>To view decks, choose one of the following:</h2>
        <h3>Decks</h3>
        {decks}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return({decks: state.firebase.data['names']});
}

export default compose(
  withRouter,
  firebaseConnect(props => {
    return [{path: '/names', storeAs: 'names'}];
  }),
  connect(mapStateToProps)
)(Homepage);

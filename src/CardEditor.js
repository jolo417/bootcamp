
import React from 'react';
import './CardEditor.css';

import { Link } from 'react-router-dom';

class CardEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { front: '', back: '',
    }
  }

  addCard = () => {
    if (this.state.front.trim().length > 0 && this.state.back.trim().length > 0) {
        this.props.addCard(this.state);
        this.setState({ front: '', back: '' });
      }
    else {
        alert("You need a front and/or back value")
    }
    }


  deleteCard = index => {
    this.props.deleteCard(index);
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const cards = this.props.cards.map((card, index) => {
      return (
        <tr key={index}>
          <td>{card.front}</td>
          <td>{card.back}</td>
          <td>
              <button onClick={() => {this.deleteCard(index)}}>Delete Card</button>
          </td>
        </tr>
      )
    });

    const ViewCards = (cards.length > 0) ? 
        <button onClick={this.props.switchMode}><Link to="/viewer">View My Cards</Link></button> : 'Please create one card to use Card Viewer';

    return (
        <div>
            <h2>Card Editor</h2>
            <table>
                <thead>
                    <tr>
                    <th>Front</th>
                    <th>Back</th>
                    <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {cards}
                </tbody>
            </table>
            <br/>
            <input
                name="front"
                onChange={this.handleChange} 
                placeholder="Front of card" 
                value={this.state.front}
            />
            <input
                name="back"
                onChange={this.handleChange}
                placeholder="Back of card"
                value={this.state.back}
            />
            <button onClick={this.addCard}>Add Card</button>
            <hr/>
            {ViewCards}
      </div>
    )
  }
}

export default CardEditor;
import React from 'react';

class CardViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      front: true,
    }
  }

  previousCard = () => {
    if (this.state.index > 0) {
      this.setState({ index: this.state.index - 1, front: true })
    }
  }

  nextCard = () => {
    if (this.state.index < this.props.cards.length - 1) {
      this.setState({ index: this.state.index + 1, front: true })
    }
  }

  switchCard = () => {
    this.setState({ front: !this.state.front });
  }
  
  render() {
    const card = this.state.front ? this.props.cards[this.state.index].front : this.props.cards[this.state.index].back;

    return (
      <div>
        <h2>Card Viewer</h2>
        Card {this.state.index + 1} out of {this.props.cards.length}
        <table>
          <tbody>
            <tr>
              <td onClick={this.switchCard}>
                {card}
              </td>
            </tr>
            <tr>
              <td>
                <button onClick={this.previousCard}>Previous Card</button>
              </td>
              <td>
                <button onClick={this.nextCard}>Next Card</button>
              </td>
            </tr>
          </tbody>
        </table>
        <hr/>
        <button onClick={this.props.switchMode}>Edit My Cards</button>
      </div>
    )
  }
}

export default CardViewer;

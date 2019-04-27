import React from 'react';
import Navbar from './components/navbar';
import Card from './components/card/index.js';
import './App.css';
import Characters from './characters.json';

class App extends React.Component {
  state = {
    characters: [],
    currentScore: 0,
    topScore: 0
  }

  randomizeCharacters = () => {
    var randomizedArray = [];
    var temporaryCharacters = Characters;
    while (randomizedArray.length < 12){
      var randomDigit = Math.floor(Math.random()*temporaryCharacters.length)
      if(randomizedArray.indexOf(temporaryCharacters[randomDigit]) === -1){
      randomizedArray.push(temporaryCharacters[randomDigit])
      }
    }
    return randomizedArray.map(x => <Card name={x.name} photo={x.photo} key={x.key} addPerson={this.handleClick} />)
  }

  handleClick = (name) => {
    this.randomizeCharacters()
    // if the character is not already clicked    
    if (this.state.characters.indexOf(name) === -1) {
      this.setState({
        characters: [...this.state.characters, name],
        currentScore: this.state.currentScore + 1
      })
    } else {
      //game over logic

      //update top score
      if(this.state.topScore < this.state.currentScore){
        this.setState({
          topScore: this.state.currentScore
        })
      }
      
      //reset current score and clear array
      this.setState({
        currentScore: 0,
        characters: []
      })

    }
  }

  render() {
    return (
      <div className="App">
        <Navbar topscore={this.state.topScore} currentscore ={this.state.currentScore} arraylength={this.state.characters.length}/>
        <div className='wrapper'>
          {this.randomizeCharacters()}
        </div>
      </div>
    );
  }
}

export default App;

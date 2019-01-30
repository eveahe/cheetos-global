import React, { Component } from 'react';
import './MemoryGame.css';

// import Header from "./components/Header";
import Footer from "./components/Footer";


// import the cards from a json list
import data from "./data.json";

import {shuffleArray} from "./shuffle.js"




class MemoryGame extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: shuffleArray(data),
      selected: [], // indexes which have been selected
      correct: [], // indexes which have been guessed correctly
      data: null
    };
    
  }




  onCardClick(clickedIndex) {
    //var countryCheck  = cards[clickedIndex].country
    const { selected, cards, correct} = this.state;
 

    if (selected.length === 0) { // selecting a first card
      this.setState({ selected: [clickedIndex] })
    } else if (selected.length === 1) { // they're selecting a second card
      if (cards[selected[0]].country === cards[clickedIndex].country) {
        // It's a match :)
        // Add selected cards to `correct` and reset selection
        this.setState({
            correct: correct.concat([selected[0], clickedIndex]),
            selected: []
        });
        
        
      } else {
        // It's not a match :(
        // Select it for now, and reset selection in a bit
        this.setState({ selected: [selected[0], clickedIndex] });
        setTimeout(() => {
          this.setState({ selected: [] })
        }, 1500);
      }
    }
    // Otherwise they already have 2 selected and we don't wanna do anything
  }
  


  render() {
    const { correct, selected, cards } = this.state;
    let gameStatus = <div className='gameState'></div>;
    
      // check if the game is complete!
      if(correct.length === cards.length){
          gameStatus = <div className='gameState'>
                    <div>CHEETOS, CHECKED!</div>
                </div>
              }
        
        
    
    return (
      <div>
        <h1>check your cheetos</h1>
        <h3>Match together deliciously puffed & fried corn snacks from the same country of origin!!!</h3>
        <marquee>
          {gameStatus}
        </marquee>
        <div className="mui-panel wrapper">
          {cards.map((image, i) => (
            <MemoryCard
              key={i}
              image={cards[i].imagelink}
              countryName={cards[i].country}
              isCorrect={correct.includes(i)}
              isSelected={selected.includes(i)}
              onSelect={() => this.onCardClick(i)}
            />
          ))}
        </div>
        <marquee>
          {gameStatus}
        </marquee>
        <Footer />
      </div> 
    );
  }
}

const MemoryCard = ({ image, isSelected, isCorrect, onSelect, countryName }) => (
  <div
    className="modal mui-panel"
    onClick={() => {
      // You can only select a card that's not already correct and
      // isn't currently selected
      if (!isCorrect && !isSelected) {
        onSelect();
      }
    }}
  >
    <img
      style={{visibility: (isCorrect || isSelected) ? 'visible' : 'hidden' }}
      src={image}
      srcSet={image}
      alt={countryName}
    />
    <p // This displays the country name of the cheetos if there is a match. 
      style={{ visibility: (isCorrect) ? 'visible' : 'hidden' }} className="nametest">{countryName}</p>
  </div>
);







export default MemoryGame;
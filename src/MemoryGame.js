import React, { Component } from 'react';
import './MemoryGame.css';

// const IMAGES = ["https://cdn.glitch.com/1172cc4c-f207-4261-8964-035dd57ee8d0%2Fkurkure-tomato.jpg?1547975036127", "https://cdn.glitch.com/1172cc4c-f207-4261-8964-035dd57ee8d0%2Fkurkure-tomato.jpg?1547975036127", "https://cdn.glitch.com/1172cc4c-f207-4261-8964-035dd57ee8d0%2Fcheetosflaminghot.jpg?1547911084461", "https://cdn.glitch.com/1172cc4c-f207-4261-8964-035dd57ee8d0%2Fcheetosflaminghot.jpg?1547911084461", "https://cdn.glitch.com/1172cc4c-f207-4261-8964-035dd57ee8d0%2Fcheesepuffs.jpeg?1547910757501", "https://cdn.glitch.com/1172cc4c-f207-4261-8964-035dd57ee8d0%2Fcheesepuffs.jpeg?1547910757501", "https://cdn.glitch.com/1172cc4c-f207-4261-8964-035dd57ee8d0%2Fwotsits.jpeg?1547910999949",
//   "https://cdn.glitch.com/1172cc4c-f207-4261-8964-035dd57ee8d0%2Fwotsits.jpeg?1547910999949", "https://cdn.glitch.com/1172cc4c-f207-4261-8964-035dd57ee8d0%2Fgoldenflakepuffs.jpg?1547910999539", "https://cdn.glitch.com/1172cc4c-f207-4261-8964-035dd57ee8d0%2Fgoldenflakepuffs.jpg?1547910999539", "https://cdn.glitch.com/1172cc4c-f207-4261-8964-035dd57ee8d0%2Ferdnusseflips.jpg?1547911121098", "https://cdn.glitch.com/1172cc4c-f207-4261-8964-035dd57ee8d0%2Ferdnusseflips.jpg?1547911121098"];

const IMAGE_TEST = [
      {name: "kurkure", country: "India", imagelink: "https://cdn.glitch.com/1172cc4c-f207-4261-8964-035dd57ee8d0%2Fkurkure-tomato.jpg?1547975036127", selected: false, correct: false},
      {name: "kurkure", country: "India", imagelink: "https://cdn.glitch.com/1172cc4c-f207-4261-8964-035dd57ee8d0%2Fkurkure-tomato.jpg?1547975036127", selected: false, correct: false},
      {name: "flaminghot", country: "USA", imagelink: "https://cdn.glitch.com/1172cc4c-f207-4261-8964-035dd57ee8d0%2Fcheetosflaminghot.jpg?1547911084461", selected: false, correct: false},
      {name: "flaminghot", country: "USA", imagelink: "https://cdn.glitch.com/1172cc4c-f207-4261-8964-035dd57ee8d0%2Fcheetosflaminghot.jpg?1547911084461", selected: false, correct: false},
      {name: "cheesepuffs", country: "USA", imagelink: "https://cdn.glitch.com/1172cc4c-f207-4261-8964-035dd57ee8d0%2Fcheesepuffs.jpeg?1547910757501", selected: false, correct: false},
      {name: "cheesepuffs", country: "USA", imagelink: "https://cdn.glitch.com/1172cc4c-f207-4261-8964-035dd57ee8d0%2Fcheesepuffs.jpeg?1547910757501", selected: false, correct: false},
      {name: "wotsits", country: "UK", imagelink: "https://cdn.glitch.com/1172cc4c-f207-4261-8964-035dd57ee8d0%2Fwotsits.jpeg?1547910999949", selected: false, correct: false},
      {name: "wotsits", country: "UK", imagelink: "https://cdn.glitch.com/1172cc4c-f207-4261-8964-035dd57ee8d0%2Fwotsits.jpeg?1547910999949", selected: false, correct: false},
      {name: "goldenpuffs", country: "USA", imagelink: "https://cdn.glitch.com/1172cc4c-f207-4261-8964-035dd57ee8d0%2Fgoldenflakepuffs.jpg?1547910999539", selected: false, correct: false},
      {name: "goldenpuffs", country: "USA", imagelink: "https://cdn.glitch.com/1172cc4c-f207-4261-8964-035dd57ee8d0%2Fgoldenflakepuffs.jpg?1547910999539", selected: false, correct: false},
      {name: "erdnusseflips", country: "Germany", imagelink: "https://cdn.glitch.com/1172cc4c-f207-4261-8964-035dd57ee8d0%2Ferdnusseflips.jpg?1547911121098", selected: false, correct: false},
      {name: "erdnusseflips", country: "Germany", imagelink: "https://cdn.glitch.com/1172cc4c-f207-4261-8964-035dd57ee8d0%2Ferdnusseflips.jpg?1547911121098", selected: false, correct: false}
  ]

const imageLinks = IMAGE_TEST.map(snack => snack.imagelink);
console.log(imageLinks);
const imageCountries = IMAGE_TEST.map(snack => snack.country);
console.log(imageCountries);

class MemoryGame extends Component {
  constructor(props) {
    super(props);

    // You can simplify your state a lot
    this.state = {
      cards: shuffleArray(imageLinks.slice()),
      selected: [], // indexes which have been selected
      correct: [] // indexes which have been guessed correctly
    };
    // console.log(this.state);
    
  }



  onCardClick(clickedIndex) {
    const { selected, cards, correct } = this.state;

    if (selected.length === 0) { // selecting a first card
      this.setState({ selected: [clickedIndex] })
    } else if (selected.length === 1) { // they're selecting a second card
      if (cards[selected[0]] === cards[clickedIndex]) {
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
    return (
      <div>
        <h1>check your cheetos</h1>
        <div className="mui-panel wrapper">
          {cards.map((image, i) => (
            <MemoryCard
              key={i}
              image={image}
              countryName={imageCountries[i]}
              isCorrect={correct.includes(i)}
              isSelected={selected.includes(i)}
              onSelect={() => this.onCardClick(i)}
            />
          ))}
        </div>
      </div>
    );
  }
}

// Extracted into it's own component
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
      style={{ visibility: (isCorrect || isSelected) ? 'visible' : 'hidden' }}
      src={image}
      srcSet={image}
      alt={countryName}
    />
  </div>
);

// Probably in a different file
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default MemoryGame;
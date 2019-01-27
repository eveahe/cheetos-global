import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import MemoryGame from './MemoryGame';
import Footer from "./components/Footer";


ReactDOM.render(
  <App />,
  document.getElementById('root')
);

ReactDOM.render(<MemoryGame />, document.getElementById('root'));

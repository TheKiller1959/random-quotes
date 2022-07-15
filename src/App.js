import './assets/styles/App.css';
import Data from './assets/data/quotes.json';
import React, { useState } from 'react';
import QuoteBox from './Components/QuoteBox';
import Button from './Components/Button';

function App() {

  let index = Math.floor(Math.random()*102);
  const [color, setColor] = useState('bgcolor');
  const [quote, setQuote] = useState(Data.quotes[index]);

  function HandleColor(){
    let color = Math.floor(Math.random()*7);
    if(color === 0){
      setColor('yellow');
    } else if(color === 1) {
      setColor('orange');
    } else if(color === 2) {
      setColor('red');
    } else if(color === 3) {
      setColor('blue');
    } else if(color === 4) {
      setColor('green');
    } else if(color === 5) {
      setColor('cyan');
    } else if(color === 6) {
      setColor('salmon');
    }
  }

  function HandleIndex(){
    index = Math.floor(Math.random()*102);
    setQuote(Data.quotes[index]);
    HandleColor();
  }

  return (
    <div className="App">
      <div className={'bg ' + color}>
        <div className="title">
          <h1>Random Quotes</h1>
          <h3>@randomquotes on Twitter</h3>
        </div>
        <div className="container">
          <div className="card">
            <QuoteBox quote={quote}/>
            <hr />
            <Button handle={HandleIndex} color={color} quote={quote.quote} author={quote.author}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
import axios from 'axios';
import React, {useState, useEffect} from 'react';

const QuoteBox = () => {
  
  const [quote, setQuote] = useState("En chargement...");
  const [author, setAuthor] = useState("En chargement...");
  
  const apiLoadQuote = () => {
    axios.get("https://api.quotable.io/random")
          .then(r => {
            setQuote(r.data.content)
            setAuthor(r.data.author)
          })
          .catch(e => console.log(e));
  }

  const handleNewQuoteClick = () => {
    apiLoadQuote();
  };
  
  useEffect(() => {
    apiLoadQuote();
  }, []);

  return (
    <div id="main-container" className="d-flex align-items-center">
      <div id="quote-box">
        <div id="text"><i class="fas fa-quote-left"></i><span class="quote-text"> {quote} </span><i class="fas fa-quote-right"></i></div>
        <div id="author"><i class="fas fa-angle-right"></i> {author}</div>
        <button type="button" id="new-quote" className="btn btn-dark" onClick={handleNewQuoteClick}><i class="fas fa-sync-alt"></i></button>
        <a id="tweet-quote" href={`https://www.twitter.com/intent/tweet?text=${quote} from ${author}`} target="_blank" rel="noreferrer"><i class="fab fa-twitter-square"></i></a>
      </div>
    </div>
  );
}

export default QuoteBox;

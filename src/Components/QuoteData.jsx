import {useState, useEffect} from 'react';
import SingleQuote from './SingleQuote';

const QuoteData = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(()=>{
        fetch('https://api.quotable.io/quotes/random?limit=5').then(response=>{
            if(response.status >= 200 && response.status < 300){
                return response.json();
            }else{
                throw new Error(response.statusText);
            }
        }).then(quote=>{
            setQuotes(quote);
        })
    }, []);

  return (
    <div>
      {quotes.map(quote=>{
        return (
          <div key={quote.id}>
            <SingleQuote quote={quote}></SingleQuote>
          </div>
        )
      })}
    </div>
  )
}

export default QuoteData;
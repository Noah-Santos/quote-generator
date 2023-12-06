import {useState, useEffect} from 'react';
import SingleQuote from './SingleQuote';

const QuoteData = () => {
  const [counts, setCounts] = useState(0);
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
  }, [counts]);
  console.log(quotes)

  let renew = ()=>{
    setCounts(counts+1);
  }

  // userName: universalUser
  // password: universal1234

  return (
    <div>
      {quotes.map(quote=>{
        return (
          <div key={quote._id}>
            <SingleQuote quote={quote}/>
            <button onClick={renew}>New Quotes</button>
          </div>
        )
      })}
    </div>
  )
}

export default QuoteData;
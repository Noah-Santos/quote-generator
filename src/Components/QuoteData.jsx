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

  // let getCounts = (count = 3)=>{
  //   fetch(`https://api.quotable.io/quotes/random?limit=${count}`).then(response=>{
  //       if(response.status >= 200 && response.status < 300){
  //           return response.json();
  //       }else{
  //           throw new Error(response.statusText);
  //       }
  //   }).then(quote=>{
  //       setQuotes(quote);
  //   })
  // }
  // userName: universalUser
  // password: universal1234

  return (
    <div>
      {quotes.map(quote=>{
        return (
          <div key={quote.id}>
            <SingleQuote quote={quote}/>
            {/* <button onClick={getCounts}>New Quotes</button> */}
          </div>
        )
      })}
    </div>
  )
}

export default QuoteData;
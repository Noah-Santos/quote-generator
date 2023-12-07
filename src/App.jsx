import {useState, useEffect} from 'react';
import SingleQuote from './Components/SingleQuote';

function App() {
  const [counts, setCounts] = useState(0);
  const [quotes, setQuotes] = useState([]);

  // useEffect that loads when count is changed
  useEffect(()=>{
      fetch('https://api.quotable.io/quotes/random?limit=3&maxLength=125').then(response=>{
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

  // changes count to call the useEffect
  let renew = ()=>{
    setCounts(counts+1);
  }

  // userName: universalUser
  // password: universal1234

  return (
    <div className='body'>
      <div className="section">
        {quotes.map((quote, index)=>{
          return (
            <SingleQuote quote={quote} index={index} key={quote._id}/>
          )
        })}
      </div>
      <button onClick={renew} className='refresh'>New Quotes</button>
    </div>
  )
}

export default App;

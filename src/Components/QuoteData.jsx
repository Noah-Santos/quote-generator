import {useState, useEffect} from 'react'

const QuoteData = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(()=>{
        fetch('https://api.quotable.io/random').then(response=>{
            if(response.status >= 200 && response.status < 300){
                return response.json();
            }else{
                throw new Error(response.statusText);
            }
        }).then(quote=>{
            setQuotes(quote);
        })
    }, []);

  console.log(quotes)
  console.log(quotes.content)

  return (
    <div>"{quotes.content}" - {quotes.author}</div>
  )
}

export default QuoteData;
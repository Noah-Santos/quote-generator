import React from 'react'

const SingleQuote = ({quote, index}) => {
  return (
    <div className='singleSection'>
        {/* <h3 className='single animation' style={{animationDelay: `${index-0.5}s`}}>"{quote.content}"</h3> */}
        <h3 className={`single animation delay${index}`}>"{quote.content}"</h3>
        <h5 className={`author animation delay${index}${index}`}><em>- {quote.author}</em></h5>
    </div>
  )
}

export default SingleQuote
import React from 'react'

const SingleQuote = ({quote}) => {
  return (
    <div>
        <h3 className='single'>"{quote.content}" <span>- {quote.author}</span></h3>
    </div>
  )
}

export default SingleQuote
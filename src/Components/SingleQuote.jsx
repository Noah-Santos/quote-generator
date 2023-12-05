import React from 'react'

const SingleQuote = ({quote}) => {
  return (
    <div>
        <h3>"{quote.content}" <span>- {quote.author}</span></h3>
    </div>
  )
}

export default SingleQuote
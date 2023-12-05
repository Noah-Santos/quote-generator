import React from 'react'

const SingleQuote = ({quote}) => {
  return (
    <>
        <h3>"{quote.content}" <span>- {quote.author}</span></h3>
    </>
  )
}

export default SingleQuote
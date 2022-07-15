const QuoteBox = ({quote}) => {
  return(
    <div>
      <div className="d-flex">
        <div>
          <p>
            {quote.quote}
          </p>
        </div>
      </div>
      <p className="author">{quote.author}</p>
    </div>
  )
}

export default QuoteBox;
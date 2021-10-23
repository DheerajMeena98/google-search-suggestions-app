import './index.css'

const SuggestionItem = props => {
  const {eachSuggestion, searchSuggestion} = props
  const {id, suggestion} = eachSuggestion

  const searchGivenSuggestion = () => {
    searchSuggestion(eachSuggestion)
  }

  return (
    <li className="each-suggestion-item-container">
      <p className="each-suggestion-text"> {suggestion} </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        className="arrow-logo"
        alt="arrow"
        onClick={searchGivenSuggestion}
      />
    </li>
  )
}

export default SuggestionItem

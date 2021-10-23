import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  onSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  searchSuggestion = eachSuggestion => {
    const newInputValue = eachSuggestion.suggestion
    this.setState({searchInput: newInputValue})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state

    const filteredSuggestionsList = suggestionsList.filter(eachSuggestion => {
      const eachSuggestionText = eachSuggestion.suggestion
      const suggestionInLower = eachSuggestionText.toLowerCase()

      if (
        suggestionInLower.includes(searchInput) ||
        eachSuggestionText.includes(searchInput)
      ) {
        return true
      }
      return false
    })

    return (
      <div className="google-suggestion-bcg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          className="google-image"
          alt="google logo"
        />
        <div className="google-suggestions-container">
          <div className="input-search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-logo"
            />
            <input
              type="search"
              className="input-search-element"
              placeholder="Search Google"
              value={searchInput}
              onChange={this.onSearchInput}
            />
          </div>
          <ul className="google-suggestions-list-container">
            {filteredSuggestionsList.map(eachItem => (
              <SuggestionItem
                searchSuggestion={this.searchSuggestion}
                eachSuggestion={eachItem}
                key={eachItem.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions

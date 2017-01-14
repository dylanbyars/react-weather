import React from 'react';
import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete'

class SearchInput extends React.Component {
  // initialize this muh
  constructor(props) {
    super(props)

    this.state = {
      place: ''
    }

    this.onChange = place => this.setState({ place })
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    console.log('SUBMIT PRESSED!')
    // stop the browser from refreshing like it wants to with a standard form event
    e.preventDefault()

    // get the coordinates of the searched place
    const { place } = this.state

    geocodeByAddress(place,  (err, { lat, lng }) => {
      if (err) {
        console.log('Oh no!', err)
      }

      console.log(`Yay! got latitude and longitude for ${place}`, { lat, lng })
    })

      // send the value stored in SearchBar's state to the launchSearch function defined in <App />
    this.props.launchSearch(this.state.place)
      // set the text input back to an empty field for easy searching of another location
    this.setState({
      place: ''
    })
  }

  render() {

  const AutocompleteItem = ({ suggestion }) => (<div><i className="fa fa-map-marker"/>{suggestion}</div>)


    return (
      <form onSubmit={this.handleSubmit}>
        <PlacesAutocomplete 
          autocompleteItem={AutocompleteItem}
          className="search-input" 
          onChange={this.onChange} 
          value={this.state.place} 
          placeholder="Search for a city..." 
          hideLabel />
      </form>
    )
  }
}

export default SearchInput;
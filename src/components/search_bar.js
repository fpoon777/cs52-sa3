import React, { Component } from 'react';

class SearchBar extends Component {
// The constructor is the ONLY place you will ever set this.state directly like this.
  constructor(props) {
    super(props);

    this.state = { searchterm: '' };
  }

  // eslint-disable-next-line class-methods-use-this
  onInputChange = (event) => {
    this.props.onSearchChange(event.target.value);
    this.setState({ searchterm: event.target.value });
    console.log(event.target.value);
  }

  render() {
    return (
      <div id="search-bar">
        <input onChange={this.onInputChange} value={this.state.searchterm} />
      </div>
    );
  }
}

export default SearchBar;

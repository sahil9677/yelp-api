import React from 'react';
import './App.css';

import BusinessList from './components/businesslist';
import SearchBar from './components/SearchBar';
import Yelp from './yelp'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      businesses: [],
    };
    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(location) {
    Yelp.search(location).then(businesses => {
      this.setState({ businesses: businesses });
    });
  }

  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp}/>
        <BusinessList businesses={this.state.businesses}/>
      </div>
    );
  }
}

export default App;

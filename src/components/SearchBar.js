import React from "react";
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: ''
        };
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    getSortByClass(sortByOption) {
        if(sortByOption === this.state.sortBy) {
            return 'active';
        }
            return '';
    }

    handleLocationChange(event) {
        this.setState({ location: event.target.value })
    }

    handleSearch(event) {
        this.props.searchYelp(this.state.location);
        event.preventDefault();
    }

    render() {
        return (
        <div className="SearchBar">
            <div className="SearchBar-fields">
            <input placeholder="Where?" onChange={this.handleLocationChange} />
            </div>
            <div className="SearchBar-submit">
            <a onClick={this.handleSearch}>Let's Go</a>
            </div>
        </div>
        );
    }
}

export default SearchBar;

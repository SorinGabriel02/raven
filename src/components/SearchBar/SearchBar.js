import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      location: "",
      sortBy: "best_match",
    };

    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);

    this.sortByOptions = {
      "Best Match": "best_match",
      "Highest Rated": "rating",
      "Most Reviews": "review_count",
    };

    this.inputRef = React.createRef();
  }

  getSortByClass(sortByOption) {
    if (this.state.sortBy === sortByOption) {
      return "active";
    }
    return "";
  }

  handleSortByChange(sortByOption) {
    this.setState(
      {
        sortBy: sortByOption,
      },
      () => {
        if (this.state.location !== "") {
          this.props.searchYelp(
            this.state.term,
            this.state.location,
            this.state.sortBy
          );
        }
      }
    );
  }

  handleTermChange(event) {
    this.setState({
      term: event.target.value,
    });
  }

  handleLocationChange(event) {
    this.setState({
      location: event.target.value,
    });
  }

  handleSearch(event) {
    if (this.state.location !== "") {
      this.props.searchYelp(
        this.state.term,
        this.state.location,
        this.state.sortBy
      );
    }
  }

  handleKeyPress(event) {
    const code = event.which || event.keyCode;
    if (code === 13) {
      this.handleSearch();
    }
    event.stopPropagation();
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }

  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map((sortByOption) => {
      let sortByOptionValue = this.sortByOptions[sortByOption];
      return (
        <li
          className={this.getSortByClass(sortByOptionValue)}
          key={sortByOptionValue}
          onClick={this.handleSortByChange.bind(this, sortByOptionValue)}
        >
          {sortByOption}
        </li>
      );
    });
  }
  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>{this.renderSortByOptions()}</ul>
        </div>
        <div className="SearchBar-fields">
          <input
            ref={this.inputRef}
            type="text"
            placeholder="Type of business, eg. 'bar'"
            onChange={this.handleTermChange}
          />
          <input
            type="text"
            placeholder="Where is it located?"
            onChange={this.handleLocationChange}
            onKeyPress={this.handleKeyPress}
          />
        </div>
        <div className="SearchBar-submit">
          <button onClick={this.handleSearch}>Let's Go</button>
        </div>
      </div>
    );
  }
}

export default SearchBar;

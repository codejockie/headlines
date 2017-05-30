import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  searchVisible: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired,
};

const defaultProps = {
  searchVisible: false,
  onSubmit: () => {},
};

class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: ''
    }
  }
  updateSearchInput(event) {
    this.setState({
      searchText: event.target.value
    });
  }

  submitForm(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.searchText);
  }

  render() {
    let searchInputClasses = ['searchInput'];

    if (this.props.searchVisible) {
      searchInputClasses.push('active');
    }

    return (
      <form onSubmit={this.submitForm.bind(this)}>
        <input type="search" className={searchInputClasses}
        onChange={this.updateSearchInput.bind(this)}
        placeholder="Search..." />
      </form>
    );
  }
}

SearchForm.propTypes = propTypes;

SearchForm.defaultProps = defaultProps;

export default SearchForm;

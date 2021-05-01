import React from "react";

class SearchBar extends React.Component {
    state = {term : ''}

    onInputChange = e => {
        this.setState({ term : e.target.value })
    }

    onFormSubmit = e => {
        e.preventDefault();

        this.props.onFormSubmit(this.state.term);
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.onFormSubmit} className="form-group">
                    <label htmlFor="inpt" className="my-1">Search Videos</label>
                    <input id="inpt" type="text" className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                    />
                </form>
            </div>
        );
    }
}

export default SearchBar;
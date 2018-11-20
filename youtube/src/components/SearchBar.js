import React from 'react';

export default class SearchBar extends React.Component {
    state = {
        term: ''
    };

    handleFormSubmit = (event) => {
        event.preventDefault();
        this.props.handleSubmit(this.state.term);
    };

    handleInputChange = (event) => {
        this.setState({ term: event.target.value });
    };

    render() {
        return (
            <div className="search-bar ui segment">
                <form 
                    className="ui form"
                    onSubmit={this.handleFormSubmit}    
                >
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                            type="text" 
                            value={this.state.term} 
                            onChange={this.handleInputChange} 
                        />
                    </div>
                </form>
            </div>
        );
    }
}
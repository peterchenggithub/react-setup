import React from 'react';

class EntryBar extends React.Component {
    constructor(props){
        super(props);
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(){
        let name = document.getElementById('itemName').value
        this.props.add(name);
    }

    render(){
        return(
            <div>
            <label>
                Add new entry to to-do list.
                <br/>
                <input type="input" id="itemName" width="100%" />
                <input type="button" value="Add" onClick={this.handleInput} />
            </label>
            </div>
        );
    }
}

export default EntryBar;
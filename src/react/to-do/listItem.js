import React from 'react';

class ListItem extends React.Component{
    constructor(props){
        super(props);
        this.handleCheckBox = this.handleCheckBox.bind(this);
        this.state = {status: (this.props.item.status === 'done' ? 'checked' : '')};
    }

    handleCheckBox(e){
        
       if(e.target.checked){
           this.props.edit(this.props.index, 'done');
           this.setState({status:'checked'});
       }else{
            this.props.edit(this.props.index, 'todo');
            this.setState({status:''});
       }
    }

    checkStatus(){
        return this.state.status === 'checked' ? 'checked' : ''
    }

    render(){
        console.log('listItem - render()');
        return (
            <div>
            {this.props.item.name}, {this.props.item.status}, {this.state.status}
            <input type="checkbox" checked={this.state.status} onChange={this.handleCheckBox}  />
            </div>
        )
    }
}

export default ListItem;
import React from 'react';
import EntryBar from './entryBar.js';
import List from './list.js';

class ToDoApp extends React.Component {
    constructor(props){
        super(props);
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.updateItem = this.updateItem.bind(this);
        this.state = {todo : []}
    }

    addItem(name){
        console.log('addItem: ' + name);
        let list = this.state.todo;
        list.push({'name': name, 'status': 'todo'});
        this.setState({todo:list});
    }

    removeItem(i){
        let list = this.state.todo;
        list = list.splice(i,1);
        this.setState({todo:list});
    }

    updateItem(i, s){
        let list = this.state.todo;
        list[i].status = s;
        this.setState({todo:list});
    }

    render() {
        const list = this.state.todo;
        console.log(list);
        return (

            <div>
                <h1>To-do List</h1>
                
                
                <EntryBar add={this.addItem} />
                <List list={list} del={this.removeItem} edit={this.updateItem} />
            </div>
        );
    }
}

export default ToDoApp;
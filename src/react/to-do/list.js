import React from 'react';
import ListItem from './listItem.js'

class List extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                Name,Status
                {
                    this.props.list.map((item, idx) => {
                        return <ListItem key={idx} index={idx} item={item} del={this.props.del} edit={this.props.edit}/>
                    })
                }

                
            </div>
        )
    }
}

export default List;
import React, { Component } from 'react';
import classNames from 'classnames';

export class TodoItem extends Component {
    onItemClick = () => {
        this.props.item.isComplete = !this.props.item.isComplete;
    }
    render() {
        const { item, onClick } = this.props;
        return (
            <div onClick={onClick} className={classNames('TodoItem', {
                'TodoItem-complete' : item.isComplete
            })}>
                <p>{item.title}</p>
            </div>
        )
    }
}

export default TodoItem

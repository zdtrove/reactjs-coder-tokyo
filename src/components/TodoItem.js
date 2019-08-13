import React, { Component } from 'react';
import classNames from 'classnames';
import Check from '../img/check.svg';
import CheckComplete from '../img/check-complete.svg';

export class TodoItem extends Component {
    onItemClick = () => {
        this.props.item.isComplete = !this.props.item.isComplete;
    }
    render() {
        const { item, onClick } = this.props;
        let url = Check;
        if (item.isComplete) {
            url = CheckComplete;
        }
        return (
            <div className={classNames('TodoItem', {
                'TodoItem-complete' : item.isComplete
            })}>
                <img  onClick={onClick} src={url} />
                <p>{item.title}</p>
            </div>
        )
    }
}

export default TodoItem

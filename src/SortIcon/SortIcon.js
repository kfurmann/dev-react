import React from 'react';

export class SortIcon extends React.Component {

  constructor() {
    super();

    this.state = {
      order: 1
    }
  }

  onClick() {

    const newOrder = -this.state.order;

    this.props.onChangeSorting(newOrder);

    this.setState({
      order: newOrder
    });
  }

  render() {

    const {order} = this.state;

    const arrow = order > 0 ? 'up' : 'down';

    return (
        <button onClick={this.onClick.bind(this)}>
          {arrow}
        </button>
    )
  }
}
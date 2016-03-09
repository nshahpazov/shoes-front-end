/// <reference path="../../../../typing/react.d.ts" />

import * as React from 'react';

class ShoesItem extends React.Component<any, any> {

  constructor(props) {
    super(props);
  }

  render() {
    const divStyle = {
      width: 100,
      height: 20,
      border: '1px solid #fff',
      backgroundColor: this.props.color
    };

    const {shoes} = this.props;
    const {name} = shoes;

    return (
      <div className="shoes-item">
        <p>{name}</p>
        <img src="images/shoes.jpg" />
        <button>Add to Basket</button>
      </div>
    );
  }
}

export default ShoesItem;
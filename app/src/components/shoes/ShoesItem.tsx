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

    return (
      <div>
        <p>{shoes.name}</p>
        <img src="images/" />
      </div>
    );
  }
}

export default ShoesItem;
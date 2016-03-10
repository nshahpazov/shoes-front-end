/// <reference path="../../../../typing/react.d.ts" />
/// <reference path="../../../../typing/react-bootstrap.d.ts" />
import * as React from 'react';
import {Tooltip, OverlayTrigger} from 'react-bootstrap';

export default class BasketItem extends React.Component<any, any> {

  constructor(props) {
    super(props);
  }

  render() {
    const {name, description, price} = this.props.item;
    const tooltip = (<Tooltip>{description}</Tooltip>);

    return (
      <div>
        <p>{name}</p>
        <button type="button" className="close"></button>
        <img src="images/shoes.jpg" />
        <p>PRICE: {price} </p>
        <p>{description}</p>
      </div>
    );
  }
}
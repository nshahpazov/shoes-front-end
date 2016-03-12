/// <reference path="../../../../typing/react.d.ts" />
/// <reference path="../../../../typing/react-bootstrap.d.ts" />

import * as React from 'react';
import {Tooltip, OverlayTrigger} from 'react-bootstrap';
import BasketActions from '../../actions/BasketActions';

export default ({item, basket}) => {
  const {name, description, price} = item.shoeModel;
  const tooltip = (<Tooltip>{description}</Tooltip>);
  return (
    <div>
      <p>
        {name} &nbsp;
        <button onClick={() => BasketActions.removeItem(basket, item)}>
          X
        </button>
      </p>
      <OverlayTrigger placement="bottom" overlay={tooltip}>
        <img src="images/shoes.jpg" />
      </OverlayTrigger>
      <p>PRICE: {price} </p>
    </div>
  );
}
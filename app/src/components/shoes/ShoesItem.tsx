/// <reference path="../../../../typing/react.d.ts" />
/// <reference path="../../../../typing/react-bootstrap.d.ts" />
import * as React from 'react';
import {Tooltip, OverlayTrigger} from 'react-bootstrap';
import ShoesActions from '../../actions/ShoesActions';

export default ({shoes}) => {
  const {name, description, price} = shoes;
  const tooltip = (<Tooltip>{description}</Tooltip>);

  return (
    <div className="shoes-item">
      <p className="shoes-item-name">{name} - ${price}</p>
      <OverlayTrigger placement="bottom" overlay={tooltip}>
        <img src="images/shoes.jpg"/>
      </OverlayTrigger>
      <button className="btn btn-default"
        onClick={() => ShoesActions.addToBasket(shoes)}>
        Add to Basket
      </button>
    </div>
  );
};

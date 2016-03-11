/// <reference path="../../../../typing/react.d.ts" />
/// <reference path="../../../../typing/react-bootstrap.d.ts" />
import * as React from 'react';
import {Tooltip, OverlayTrigger} from 'react-bootstrap';
import ShoesActions from '../../actions/ShoesActions';

export default class ShoesItem extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }

  onClickAdd(item) {
    ShoesActions.addToBasket(item);
  }

  render() {
    const {name, description, price} = this.props.shoes;
    const tooltip = (<Tooltip>{description}</Tooltip>);

    return (
      <div className="shoes-item">
        <p className="shoes-item-name">{name} - ${price}</p>
        <OverlayTrigger placement="bottom" overlay={tooltip}>
          <img src="images/shoes.jpg"/>
        </OverlayTrigger>
        <button className="btn btn-default" onClick={this.onClickAdd.bind(this, this.props.shoes)}>
          Add to Basket
        </button>
      </div>
    );
  }
}
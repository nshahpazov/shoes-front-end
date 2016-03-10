/// <reference path="../../../../typing/react.d.ts" />
/// <reference path="../../../../typing/react-bootstrap.d.ts" />
import * as React from 'react';
import {Tooltip, OverlayTrigger} from 'react-bootstrap';

export default class BasketItem extends React.Component<any, any> {

  constructor(props) {
    super(props);
  }

  render() {
    const {name, description} = this.props.shoes;
    const tooltip = (<Tooltip>{description}</Tooltip>);

    return (
      <div className="shoes-item">
        <p className="shoes-item-name">{name}</p>
        <OverlayTrigger placement="bottom" overlay={tooltip}>
          <img src="images/shoes.jpg"/>
        </OverlayTrigger>

        <button className="btn btn-default">Add to Basket</button>
      </div>
    );
  }
}
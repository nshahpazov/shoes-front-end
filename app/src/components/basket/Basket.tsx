/// <reference path="../../../../typing/react.d.ts" />
/// <reference path="../../../../typing/react-bootstrap.d.ts" />
import * as React from 'react';
// import {Tooltip, OverlayTrigger} from 'react-bootstrap';

export default class Basket extends React.Component<any, any> {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="basket">
        <h1>Hello World</h1>
      </div>
    );
  }
}
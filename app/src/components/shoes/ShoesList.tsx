/// <reference path="../../../../typing/react.d.ts" />
import * as React from 'react';
import ShoesItem from './ShoesItem';

export default class ShoesList extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
  }

  render() {
    const {shoes} = this.props;
    const list = shoes.map(shoes => <ShoesItem shoes={shoes} />);
    return ( <div> {list} </div> );
  }
}
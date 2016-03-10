/// <reference path="../../../../typing/react.d.ts" />
import * as React from 'react';
import BasketItem from './BasketItem';

export default class BasketList extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
  }

  render() {
    const {shoes} = this.props;
    const list = shoes.map(shoes => <BasketItem shoes={shoes} />);
    return (<div> {list} </div>);
  }
}
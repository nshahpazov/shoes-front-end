/// <reference path="../../../../typing/react.d.ts" />
import * as React from 'react';
import BasketItem from './BasketItem';

export default class BasketList extends React.Component<any, any> {

  constructor(props) {
    super(props);
  }

  render() {
    const {items} = this.props;
    const itemList = items.map(item => <BasketItem item={item} />);
    return (<div> {itemList} </div>);
  }
}
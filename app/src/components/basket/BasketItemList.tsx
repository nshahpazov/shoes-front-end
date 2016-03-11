/// <reference path="../../../../typing/react.d.ts" />
import * as React from 'react';
import BasketItem from './BasketItem';

export default class BasketList extends React.Component<any, any> {

  constructor(props) {
    super(props);
  }

  render() {
    const {items} = this.props;
    debugger;
    // todo: make this ul > li
    const itemList = items.map(item => item.shoeModel)
                          .map(item => <BasketItem item={item} />);

    return (<div> {itemList} </div>);
  }
}
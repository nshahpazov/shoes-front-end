/// <reference path="../../../../typing/react.d.ts" />
/// <reference path="../../../../typing/react-router.d.ts" />
import BasketStore from '../../stores/BasketStore';
import BasketItemList from './BasketItemList';
import * as React from 'react';
import BasketActions from '../../actions/BasketActions';
import {Link} from 'react-router';


function getBasketStoreData() {
  const {basket} = BasketStore;
  return { basket };
}

export default class Basket extends React.Component<any, any> {

  constructor(props) {
    super(props);
    BasketActions.getBasket();
    this.state = getBasketStoreData();
  }

  componentDidMount(): void {
    BasketStore.on('change', ev => this.setState(getBasketStoreData()));
  }

  render() {
    const {basket} = this.state;
    const {orderItems} = basket;
    return (
      <div>
        <h1>Your Basket</h1>
        <BasketItemList items={orderItems} basket={basket} />
      </div>
    );
  }
}
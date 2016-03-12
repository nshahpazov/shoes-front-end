/// <reference path="../../../typing/superagent.d.ts" />
/// <reference path="../../../typing/js-cookie.d.ts" />
/// <reference path="../../../typing/es6-promise.d.ts" />
/// <reference path="../../../typing/object-assign.d.ts" />

import BasketServerActions from '../actions/BasketServerActions';
import APIUtils from './APIUtils';
import * as request from 'superagent';
import * as Cookies from 'js-cookie';
import {Promise} from 'es6-promise';
import assign = require('object-assign');

const BASKET_URI = 'http://localhost:3000/orders/';
const REGISTER_BASKET_URI = 'http://localhost:3000/orders';
const ITEM_URI = 'http://localhost:3000/orders';
const status = 'BASKET';

export default class BasketUtils {

  public static getBasket(id: number) {
    APIUtils.get(BASKET_URI + id)
      .then(data => BasketServerActions.receiveBasket(data));
  }

  public static addToBasket(item) {
    const basket = JSON.parse(Cookies.get('basket'));
    const {id} = basket;
    const uri = `${ITEM_URI}/${id}/order_items`;
    const data = {size: item.size, shoeModelId: item.id};

    APIUtils.post(uri, data)
      .then(BasketServerActions.receiveBasketItemPush);
  }

  public static removeItem(basketId, itemId) {
    const uri = `${ITEM_URI}/${basketId}/order_items/${itemId}`;
    APIUtils
      .delete(uri)
      .then(BasketServerActions.receiveBasketItemRemoval);
  }

  public static registerBasket() {
    const basketAsString = Cookies.get('basket');
    const hasStored = typeof basketAsString !== 'undefined';
    const basket = hasStored && JSON.parse(basketAsString);
    const cookiePromise = () => Promise.resolve(basket);
    const remotePromise = () => APIUtils.post(REGISTER_BASKET_URI, {status});
    const promise = hasStored ? cookiePromise() : remotePromise();

    promise
      .then(data => assign(data, {hasStored}))
      .then(BasketServerActions.receiveBasketRegistration);
  }
};
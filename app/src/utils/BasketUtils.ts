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

// change that to customly configured host and inside a module
// todo: change that to api calls
// todo: add constants for URIS
// todo: add env route
// todo: make this to generic api communicator
const URI = 'http://localhost:8000/basket.json';
const REGISTER_BASKET_URI = 'http://localhost:3000/orders';
const ADD_ITEM = 'http://localhost:3000/orders/';

export default class BasketUtils {

  public static getBasket() {
    APIUtils.get(URI).then(data => BasketServerActions.receiveBasket(data));
  }

  public static addItem(item) {
    const basket = JSON.parse(Cookies.get('basket'));
    const {id} = basket;
    const uri = ADD_ITEM + id + '/order_items';

    APIUtils.post(uri, item)
      .then(BasketServerActions.receiveBasketItemPush);
  }

  public static registerBasket() {
    const basketAsString = Cookies.get('basket');
    const hasStored = typeof basketAsString !== 'undefined';
    const basket = hasStored && JSON.parse(basketAsString);
    const status = 'BASKET';
    const cookiePromise = () => Promise.resolve(basket);
    const remotePromise = () => APIUtils.post(REGISTER_BASKET_URI, {status});
    const promise = hasStored ? cookiePromise() : remotePromise();

    promise
      .then(data => assign(data, {hasStored}))
      .then(BasketServerActions.receiveBasketRegistration);
  }
};
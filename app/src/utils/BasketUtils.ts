/// <reference path="../../../typing/superagent.d.ts" />
/// <reference path="../../../typing/js-cookie.d.ts" />
/// <reference path="../../../typing/es6-promise.d.ts" />

import BasketServerActions from '../actions/BasketServerActions';
import APIUtils from './APIUtils';
import * as request from 'superagent';
import * as Cookies from 'js-cookie';
import {Promise} from 'es6-promise';

// change that to customly configured host and inside a module
// todo: change that to api calls
// todo: add constants for URIS
// todo: add env route
// todo: make this to generic api communicator
const URI = 'http://localhost:8000/basket.json';
const REGISTER_BASKET_URI = 'http://localhost:8000/basket.json';

export default class BasketUtils {

  public static getBasket() {
    APIUtils.get(URI).then(data => BasketServerActions.receiveBasket(data));
  }

  public static registerBasket() {
    const storedBasket = Cookies.get('basket');
    // todo: use some lib ~~~ _.isUndefined for example
    const hasStoredBasket = typeof storedBasket !== 'undefined';
    return new Promise((resolve, reject) => {
      if (hasStoredBasket) {
        return storedBasket;
      } else {
        return APIUtils.post(REGISTER_BASKET_URI);
      }
    });
    // BasketServerActions.receiveBasketRegistration(data);
  }
};
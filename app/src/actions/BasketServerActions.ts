/// <reference path="../../../typing/js-cookie.d.ts" />
import Dispatcher from '../dispatcher/Dispatcher';
import BasketActionTypes from '../constants/BasketActionTypes';
import * as Cookies from 'js-cookie';

export default {
  receiveBasket(payload) {
    const type = BasketActionTypes.GET_BASKET_RESPONSE;
    Dispatcher.handleServerAction({ type, payload });
  },

  receiveBasketRegistration(payload) {
    const type = BasketActionTypes.REGISTER_BASKET_RESPONSE;
    if (!payload.hasStored) {
      // todo: make expires being somewhere customly stored (db, config.json file)
      payload.hasStored = true;
      Cookies.set('basket', JSON.stringify(payload), {expires: 1});
    }
    Dispatcher.handleServerAction({type, payload});
  }
};
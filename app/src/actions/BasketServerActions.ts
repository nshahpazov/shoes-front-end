/// <reference path="../../../typing/js-cookie.d.ts" />
import Dispatcher from '../dispatcher/Dispatcher';
import ActionTypes from '../constants/ActionTypes';
import * as Cookies from 'js-cookie';

export default {
  receiveBasket(payload) {
    const type = ActionTypes.GET_BASKET_RESPONSE;
    Dispatcher.handleServerAction({ type, payload });
  },

  receiveBasketRegistration(payload) {
    const type = ActionTypes.REGISTER_BASKET_RESPONSE;
    if (!payload.hasStored) {
      payload.hasStored = true;
      Cookies.set('basket', JSON.stringify(payload), {expires: 1});
    }
    Dispatcher.handleServerAction({type, payload});
  },

  receiveBasketItemRemoval(payload) {
    const type = ActionTypes.REMOVE_ITEM_FROM_BASKET_RESPONSE;
    Dispatcher.handleServerAction({ type, payload });
  },

  // a server action to be executed when the item is pushed in the basket
  receiveBasketItemPush(payload) {

  }
};
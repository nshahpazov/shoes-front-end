/// <reference path="../../../typing/js-cookie.d.ts" />
import Dispatcher from '../dispatcher/Dispatcher';
import ActionTypes from '../constants/BasketActionTypes';
import BasketUtils from '../utils/BasketUtils';
import * as Cookies from 'js-cookie';

export default {
  // add shoe type the param
  getBasket() {
    const type = ActionTypes.GET_BASKET_RESPONSE;
    const basketString = Cookies.get('basket');
    const basket = basketString && JSON.parse(basketString);
    Dispatcher.handleViewAction({type});
    BasketUtils.getBasket(basket.id);
  },

  registerBasket() {
    const type = ActionTypes.REGISTER_BASKET;
    Dispatcher.handleViewAction({type});
    BasketUtils.registerBasket();
  }
};
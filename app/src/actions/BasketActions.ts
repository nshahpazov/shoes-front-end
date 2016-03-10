import Dispatcher from '../dispatcher/Dispatcher';
import ActionTypes from '../constants/BasketActionTypes';
import BasketUtils from '../utils/BasketUtils';

export default {
  // add shoe type the param
  getBasket() {
    const type = ActionTypes.GET_BASKET_RESPONSE;
    Dispatcher.handleViewAction({ type });
    BasketUtils.getBasket();
  }
};
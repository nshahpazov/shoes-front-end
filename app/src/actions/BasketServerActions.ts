import Dispatcher from '../dispatcher/Dispatcher';
import BasketActionTypes from '../constants/BasketActionTypes';

export default {
  receiveBasket(payload) {
    const type = BasketActionTypes.GET_BASKET_RESPONSE;
    Dispatcher.handleServerAction({ type, payload });
  },

  receiveBasketRegistration(payload) {
    const type = BasketActionTypes.REGISTER_BASKET_RESPONSE;
    Dispatcher.handleServerAction({type, payload});
  }
};
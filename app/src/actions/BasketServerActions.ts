import Dispatcher from '../dispatcher/Dispatcher';
import ActionTypes from '../constants/BasketActionTypes';

export default {
  receiveBasket(payload) {
    const type = ActionTypes.GET_BASKET_RESPONSE;
    Dispatcher.handleServerAction({ type, payload });
  },

  receiveBasketRegistration(payload) {
    const type = ActionTypes.REGISTER_BASKET_RESPONSE;
    Dispatcher.handleServerAction({ type, payload });
  }
};
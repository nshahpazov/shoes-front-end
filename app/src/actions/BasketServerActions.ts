import Dispatcher from '../dispatcher/Dispatcher';
import ActionTypes from '../constants/BasketActionTypes';

export default {
  receiveBasket(payload) {
    const type = ActionTypes.GET_BASKET_RESPONSE;
    Dispatcher.handleServerAction({ type, payload });
  }
};
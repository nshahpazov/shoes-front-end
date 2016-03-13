import Dispatcher from '../dispatcher/Dispatcher';
import ActionTypes from '../constants/ActionTypes';
import ShoesUtils from '../utils/ShoesUtils';
import BasketUtils from '../utils/BasketUtils';

export default {
  // add shoe type the param
  addToBasket(payload) {
    const type = ActionTypes.ADD_TO_BASKET_ACTION;
    Dispatcher.dispatch({type, payload});
    BasketUtils.addToBasket(payload);
  },

  getShoes() {
    const type = ActionTypes.GET_SHOES;
    Dispatcher.handleViewAction({type});
    ShoesUtils.getAllShoes();
  }
};
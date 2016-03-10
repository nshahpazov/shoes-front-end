import Dispatcher from '../dispatcher/Dispatcher';
import ActionTypes from '../constants/ShoeActionTypes';
import ShoesUtils from '../utils/ShoesUtils';

export default {
  // add shoe type the param
  addToBasket(shoe) {
    const type = ActionTypes.ADD_TO_BASKET_ACTION;
    Dispatcher.dispatch({type, shoe});
  },

  getShoes() {
    const type = ActionTypes.GET_SHOES;
    Dispatcher.handleViewAction({type});
    ShoesUtils.getAllShoes();
  }
};
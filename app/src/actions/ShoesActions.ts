import Dispatcher from '../dispatcher/Dispatcher';
import ActionTypes from '../constants/ShoeActionTypes';

export default {
  // add shoe type the param
  addToBasket(shoe) {
    const type = ActionTypes.ADD_TO_BASKET_ACTION;
    Dispatcher.dispatch({type, shoe});
  }
};
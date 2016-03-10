import Dispatcher from '../dispatcher/Dispatcher';
import ActionTypes from '../constants/ShoeActionTypes';

export default {
  receiveShoes(payload) {
    const type = ActionTypes.GET_SHOES_RESPONSE;
    Dispatcher.handleServerAction({type, payload});
  }
};
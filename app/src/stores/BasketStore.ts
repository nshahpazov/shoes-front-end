/// <reference path="../../../typing/eventemitter2.d.ts" />
/// <reference path="../../../typing/object-assign.d.ts" />
/// <reference path="../../../typing/immutable.d.ts" />

import * as Immutable from 'immutable';
import * as event from 'eventemitter2';
import Dispatcher from '../dispatcher/Dispatcher';
import ActionTypes from '../constants/ActionTypes';
import assign = require('object-assign');
import Basket from '../models/Basket';
import IActionable from '../interfaces/IActionable';

const EventEmitter = event.EventEmitter2;
const CHANGE_EVENT = 'change';

// refactor to inherit event emitter and not assign
const BasketStore = assign(EventEmitter.prototype, <any>{
  _basket: { orderItems: [] },

  emitChange() {
    this.emit(CHANGE_EVENT);
  },

  get basket() {
    return this._basket;
  },

  set basket(basket) {
    // this._basket = new Basket(basket);
    this._basket = basket;
  },

  removeItemFromBasket(id: number) {
    const {basket} = this;
    basket.orderItems = basket.orderItems.filter(el => el.id !== id);
  },

  /**
   * Adds an event using the Event Emitter
   * @param {function} callback
   */
  addChangeListener(callback: Function) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * Removes an event using the Event Emitter
   * @param {function} callback
   */
  removeChangeListener(callback: Function) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

Dispatcher.register((action: IActionable) => {
  const {payload, type} = action;

  switch (type) {
    case ActionTypes.GET_BASKET_RESPONSE:
      BasketStore.basket = payload;
      BasketStore.emitChange();
      break;

    case ActionTypes.REGISTER_BASKET_RESPONSE:
      console.log(payload);
      BasketStore.emitChange();
      break;

    case ActionTypes.REMOVE_ITEM_FROM_BASKET:
      break;

    case ActionTypes.REMOVE_ITEM_FROM_BASKET_RESPONSE:
      BasketStore.removeItemFromBasket(payload);
      BasketStore.emitChange();
      break;
  }
});

export default BasketStore;
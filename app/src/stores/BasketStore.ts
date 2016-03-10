/// <reference path="../../../typing/eventemitter2.d.ts" />
/// <reference path="../../../typing/object-assign.d.ts" />
/// <reference path="../../../typing/immutable.d.ts" />

import * as Immutable from 'immutable';
import * as event from 'eventemitter2';
import Dispatcher from '../dispatcher/Dispatcher';
import BasketActionTypes from '../constants/BasketActionTypes';
import assign = require('object-assign');
import Basket from '../models/Basket';

const EventEmitter = event.EventEmitter2;
const CHANGE_EVENT = 'change';

const BasketStore = assign(EventEmitter.prototype, <any>{
  _basket: {},

  emitChange() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * Get the entire collection of shoes
   * @return {object}
   */
  get basket() {
    return this._basket;
  },

  set basket(basket) {
    this._basket = basket;
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

/**
 * TODO: make interfaces for payload and for action
 */
Dispatcher.register((action: any) => {
  const {payload, type} = action;
  switch (type) {
    case BasketActionTypes.REMOVE_FROM_BASKET:
      break;
  }
});

export default BasketStore;
/// <reference path="../../../typing/eventemitter2.d.ts" />
/// <reference path="../../../typing/object-assign.d.ts" />
/// <reference path="../../../typing/immutable.d.ts" />

import * as Immutable from 'immutable';
import * as event from 'eventemitter2';
import Dispatcher from '../dispatcher/Dispatcher';
import ShoeActionTypes from '../constants/ShoeActionTypes';
import assign = require('object-assign');
import Shoe from '../models/Shoe';

let EventEmitter = event.EventEmitter2;
let CHANGE_EVENT = 'change';

let _shoes = Immutable.List<Shoe>();

/**
 * Add To Basket

 */
function addToBasket(shoes) {

}

const ShoesStore = assign(EventEmitter.prototype, <any> {

  emitChange: () => {
    this.default.emit(CHANGE_EVENT);
  },

  /**
   * Get the entire collection of shoes
   * @return {object}
   */
  getAll: () => {
    return _shoes;
  },

  /**
   * Adds an event using the Event Emitter
   * @param {function} callback
   */
  addChangeListener: (callback: Function) => {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * Removes an event using the Event Emitter
   * @param {function} callback
   */
  removeChangeListener: (callback: Function) => {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

/**
 * TODO: make an interface for Payload
 */
Dispatcher.register((action: any) => {
  const {shoe, type} = action;
  // let checked = action.checked;

  switch (type) {
    case ShoeActionTypes.ADD_TO_BASKET_ACTION:
      // if (text !== '') {
      //   addToBasket(text);
      //   ShoesStore.emitChange();
      // }
      break;
  }
});

export default ShoesStore;
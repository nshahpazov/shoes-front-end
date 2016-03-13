/// <reference path="../../../typing/eventemitter2.d.ts" />
/// <reference path="../../../typing/object-assign.d.ts" />
/// <reference path="../../../typing/immutable.d.ts" />

import * as Immutable from 'immutable';
import * as event from 'eventemitter2';
import Dispatcher from '../dispatcher/Dispatcher';
import ActionTypes from '../constants/ActionTypes';
import assign = require('object-assign');
import Shoe from '../models/Shoe';
import IActionable from '../interfaces/IActionable';

const EventEmitter = event.EventEmitter2;
// todo: add events constants module
const CHANGE_EVENT = 'change';

const ShoesStore = assign(EventEmitter.prototype, <any> {
  _shoes: [],

  emitChange() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * Get the entire collection of shoes
   * @return {object}
   */
  get shoes() {
    return this._shoes;
  },

  set shoes(shoes) {
    this._shoes = shoes;
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
Dispatcher.register((action: IActionable) => {
  const {payload, type} = action;
  switch (type) {
    case ActionTypes.ADD_TO_BASKET_ACTION:
      break;
    case ActionTypes.GET_SHOES_RESPONSE:
      ShoesStore.shoes = payload;
      ShoesStore.emitChange();
      break;
  }
});

export default ShoesStore;
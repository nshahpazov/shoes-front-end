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

// let _shoes = Immutable.List<Shoe>();
// hardcoded for now, until api calls are established
// todo: remove hardcoded data after having api calls
// let _shoes = [{
//   name: 'Cool Shoes'
// }, {
//   name: 'Awesome Shoes'
// }, {
//   name: 'Sleek Shoes'
// }, {
//   name: 'Cool Shoes'
// }, {
//   name: 'Awesome Shoes'
// }, {
//   name: 'Sleek Shoes'
// }, {
//   name: 'Cool Shoes'
// }, {
//   name: 'Chukka Boots'
// }, {
//   name: 'Clark Shoes'
// }, {
//   name: 'Henrixon Shoes'
// }, {
//   name: 'Lorelaine Shoes'
// }, {
//   name: 'Jumbo Shoes'
// }];
/**
 * Add To Basket

 */
let _shoes = [];
function addToBasket(shoes) {

}

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
Dispatcher.register((action: any) => {
  const {payload, type} = action;
  switch (type) {
    case ShoeActionTypes.ADD_TO_BASKET_ACTION:
      break;
    case ShoeActionTypes.GET_SHOES_RESPONSE:
      ShoesStore.shoes = payload;
      ShoesStore.emitChange();
      break;
  }
});

export default ShoesStore;

/// <reference path="../../../typing/immutable.d.ts" />
import * as Immutable from 'immutable';

// note: can extend immutable and also have immutable list of records
export default class Basket {

  private orderItems;
  private id;
  private status;

  constructor({orderItems, id, status}) {
    this.orderItems = orderItems;
    this.id = id;
    this.status = status;
  }

  // note: can return a new basket
  removeItem(id: number) {
    const index = this.orderItems.find(el => el.id === id);
    debugger;
  }
}
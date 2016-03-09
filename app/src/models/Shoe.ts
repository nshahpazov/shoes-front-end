/// <reference path="../../../typing/immutable.d.ts" />
/// <reference path="../../../typing/object-assign.d.ts" />
// not sure if necessary
import * as Immutable from 'immutable';
// not neccessary anymore
// import assign = require('object-assign');

const defaults = {
  id: -1,
  description: 'none',
  size: 42
};

class Shoes extends Immutable.Record(defaults) {
  public id: number;
  public size: number;

  public text: string;

  constructor(props) {
    super(props);
  }
}

export default Shoe;
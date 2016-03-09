/// <reference path="../../../typing/immutable.d.ts" />
/// <reference path="../../../typing/object-assign.d.ts" />
// not sure if necessary
import * as Immutable from 'immutable';
// not neccessary anymore
// import assign = require('object-assign');

const defaults = {
  id: -1,
  name: '',
  description: 'none',
  size: 42
};

class Shoe extends Immutable.Record(defaults) {
  public id: number;
  public size: number;
  public name: string;
  public description: string;

  constructor(props) {
    super(props);
  }
}

export default Shoe;
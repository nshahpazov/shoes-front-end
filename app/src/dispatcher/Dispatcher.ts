/// <reference path="../../../typing/flux.d.ts" />
/// <reference path="../../../typing/object-assign.d.ts" />
import * as Flux from 'flux';
import assign = require('object-assign');
import SourceActionTypes from '../constants/SourceActionTypes';
import IActionable from '../interfaces/IActionable';

class Dispatcher extends Flux.Dispatcher<IActionable> {
  handleViewAction({type, payload}: IActionable) {
    const source = SourceActionTypes.VIEW_ACTION;
    this.dispatch({source, type, payload});
  }

  handleServerAction({type, payload}: IActionable) {
    const source = SourceActionTypes.SERVER_ACTION;
    this.dispatch({source, type, payload});
  }
}

export default new Dispatcher();

/// <reference path="../../../typing/flux.d.ts" />
/// <reference path="../../../typing/object-assign.d.ts" />
import * as Flux from 'flux';
import assign = require('object-assign');

// Todo app dispatcher with actions responding to both view and server actions
// todo: remove implicit casting to any and refactor
// todo: change to mixin or decorator
export default (<any>assign(new Flux.Dispatcher(), {
  handleViewAction(action) {
    const source = 'VIEW_ACTION';
    this.dispatch({source, action});
  },

  handleServerAction(action) {
    // const source = 'SERVER_ACTION';
    this.dispatch(action);
  }
}));

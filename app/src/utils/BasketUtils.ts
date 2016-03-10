/// <reference path="../../../typing/superagent.d.ts" />

import BasketServerActions from '../actions/BasketServerActions';
import * as request from 'superagent';

export default {
  getBasket() {
    // todo: change that to api calls
    // todo: add constants for URIS
    // todo: add env route
    // todo: make this to generic api communicator
    request.get('http://localhost:8000/basket.json')
      .set('Accept', 'application/json')
      .end((err, response) => {
        if (err) {
          return console.error(err);
        }

        BasketServerActions.receiveBasket(response.body);
      });
  }
};
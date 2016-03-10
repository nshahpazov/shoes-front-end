/// <reference path="../../../typing/superagent.d.ts" />
import ShoesServerActions from '../actions/ShoesServerActions';
import * as request from 'superagent';

export default {
  getAllShoes() {
    // todo: change that to api calls
    // todo: add config routes and default end
    request.get('http://localhost:8000/shoes.json')
      .set('Accept', 'application/json')
      .end((err, response) => {
        if (err) {
          return console.error(err);
        }

        ShoesServerActions.receiveShoes(response.body);
      });
  }
};
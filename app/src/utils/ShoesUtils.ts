/// <reference path="../../../typing/superagent.d.ts" />

// Random User API logic
import ShoesServerActions from '../actions/ShoesServerActions';
import * as request from 'superagent';

export default {
  getAllShoes() {
    debugger;
    //consdas
    // sdds d2 13 salk
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
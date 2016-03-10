/// <reference path="../../../typing/superagent.d.ts" />
/// <reference path="../../../typing/es6-promise.d.ts" />
import ShoesServerActions from '../actions/ShoesServerActions';
import * as request from 'superagent';
import {Promise} from 'es6-promise';

export default class APIUtils {
  public static get(uri) {
    return new Promise((resolve, reject) => {
      request.get(uri)
        .set('Accept', 'application/json')
        .end((err, res) => err ? reject(err) : resolve(res.body));
    });
  }

  public static post(uri, data?) {
    return new Promise((resolve, reject) => {
      request.post(uri)
        .send(data)
        .set('Accept', 'application/json')
        .end((err, res) => err ? reject(err) : resolve(res.body));
    });
  }

}
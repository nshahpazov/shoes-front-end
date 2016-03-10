/// <reference path="../../../typing/superagent.d.ts" />
import ShoesServerActions from '../actions/ShoesServerActions';
import APIUtils from './APIUtils';
import * as request from 'superagent';

export default {
  getAllShoes() {
    // todo: design some more descriptive way for URIs and callbacks\operations on them
    APIUtils.get('http://localhost:3000/shoes')
      .then(data => ShoesServerActions.receiveShoes(data));
  }
};
/// <reference path="../../typing/react.d.ts" />
/// <reference path="../../typing/react-dom.d.ts" />
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ShoesApp from './components/ShoesApp';

ReactDOM.render(
  <ShoesApp />,
  document.getElementById('main')
);
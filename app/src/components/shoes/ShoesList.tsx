/// <reference path="../../../../typing/react.d.ts" />
import * as React from 'react';
import ShoesItem from './ShoesItem';

export default ({shoes}) => {
  const list = shoes.map(shoes => <ShoesItem shoes={shoes} />);
  return ( <div> {list} </div> );
}

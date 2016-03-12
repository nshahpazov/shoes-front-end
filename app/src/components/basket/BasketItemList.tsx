/// <reference path="../../../../typing/react.d.ts" />
import * as React from 'react';
import BasketItem from './BasketItem';

export default ({items, basket}) => {
    const itemList = items.map(item => (<li>
      <BasketItem item={item} basket={basket}/>
    </li>));
    return (<div><ul> {itemList}</ul></div>);
}
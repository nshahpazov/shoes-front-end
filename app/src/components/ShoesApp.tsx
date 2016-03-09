/// <reference path="../../../typing/react.d.ts" />
import ShoesStore from '../stores/ShoesStore';
import ShoesList from './shoes/ShoesList';
import * as React from 'react';
import ShoesActions from '../actions/ShoesActions';

function getShoesStoreData() {
  const allShoes = ShoesStore.getAll();
  return {allShoes};
}

class ShoesApp extends React.Component<any, any> {

  constructor(props) {
    super(props);
    this.state = getShoesStoreData();
  }

  // todo: add type to that
  onAddToBasket(shoes): void {
    ShoesActions.addToBasket(shoes);
  }

  componentDidMount(): void {
    const self = this;
    ShoesStore.on('change', ev => self.setState(getShoesStoreData()));
  }

  render() {
    return (
      <div>
        <h1>Shoes App</h1>
        <div>
          <a href="#">View Basket</a>
        </div>
        <ShoesList shoes={this.state.allShoes} />
       </div>
    );
  }
}

export default ShoesApp;
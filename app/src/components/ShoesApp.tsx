/// <reference path="../../../typing/react.d.ts" />
/// <reference path="../../../typing/react-router.d.ts" />
import ShoesStore from '../stores/ShoesStore';
import ShoesList from './shoes/ShoesList';
import * as React from 'react';
import ShoesActions from '../actions/ShoesActions';
import {Link} from 'react-router';

function getShoesStoreData() {
  const allShoes = ShoesStore.shoes;
  return {allShoes};
}

class ShoesApp extends React.Component<any, any> {

  constructor(props) {
    super(props);

    // make call to get all shoes
    ShoesActions.getShoes();

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
        <Link to="/basket" activeClassName="active">View Basket</Link>
        </div>
        <ShoesList shoes={this.state.allShoes} />
       </div>
    );
  }
}

export default ShoesApp;
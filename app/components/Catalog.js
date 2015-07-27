import React, { PropTypes } from 'react';
import { Button } from 'react-bootstrap';

export default class Catalog {
  static propTypes = {
    addToCart: PropTypes.func.isRequired,
    products: PropTypes.array
  };

  render() {
    const { addToCart, products } = this.props;

    const catalogItens = products.map(p => <CatalogItem product={p} addToCart={addToCart} key={p.id} />);

    return (
      <div>
        <h2>Catalog</h2>
        {catalogItens}
      </div>
    );
  }
}

class CatalogItem {
  static propTypes = {
    addToCart: PropTypes.func.isRequired,
    product: PropTypes.object
  };

  render() {
    const { addToCart, product } = this.props;

    return (
      <Button onClick={() => addToCart(product)}>
        {product.name + " - " + product.price}
      </Button>
    );
  }
}

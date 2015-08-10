import React, { PropTypes } from 'react';
import { Button, Card } from 'belle';

export default class Catalog {
  static propTypes = {
    addToCart: PropTypes.func.isRequired,
    products: PropTypes.array
  };

  render() {
    const { addToCart, products } = this.props;

    const catalogItens = products.map(p => <CatalogItem product={p} addToCart={addToCart} key={p.id} />);

    return (
      <Card style={{ borderTop: '1px solid #f2f2f2' }}>
        <h2>Catalog</h2>
        {catalogItens}
      </Card>
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

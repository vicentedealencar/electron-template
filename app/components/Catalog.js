import React, { PropTypes } from 'react';

export default class Catalog {
  static propTypes = {
    addToCart: PropTypes.func.isRequired,
    products: PropTypes.array
  };

  render() {
    const { addToCart, products } = this.props;

    const catalogItens = products.map(p => <CatalogItem product={p} addToCart={addToCart} />);

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
      <div onClick={() => addToCart(product)}>
        {product.name}
      </div>
    );
  }
}

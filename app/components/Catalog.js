import React, { PropTypes } from 'react'
import { Button, Card } from 'belle'

const CatalogItem = props => {
  const { addToCart, product } = props

  return (
    <Button onClick={() => addToCart(product)} style={ {marginRight: 10} }>
      {product.name} <br/>
      R${product.price.toFixed(2)}
    </Button>
  )
}

const Catalog = props => {
  const { addToCart, products } = props

  const catalogItens = products.map(p => <CatalogItem product={p} addToCart={addToCart} key={p.id} />)

  return (
    <Card style={{ borderTop: '1px solid #f2f2f2' }}>
      <h2>Catalog</h2>
      {catalogItens}
    </Card>
  )
}

export default Catalog

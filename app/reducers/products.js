const initialState = [{
	id: 1,
	name: 'coca',
	price: 3
}, {
	id: 2,
	name: 'pepsi',
	price: 4
}, {
	id: 3,
	name: 'açai',
	price: 5
}, {
	id: 4,
	name: 'mate',
	price: 6
}];

function products(product = initialState, action) {
  switch (action.type) {
  default:
    return product;
  }
}

export default products;

// Cart item data structure
export const CartItemModel = {
  id: '',
  productId: '',
  name: '',
  price: 0,
  originalPrice: 0,
  image: '',
  size: '',
  quantity: 1,
  totalPrice: 0
};

// Cart state structure
export const CartModel = {
  items: [],
  totalItems: 0,
  subtotal: 0,
  shipping: 0,
  total: 0,
  promoCode: '',
  discount: 0
};

// Cart actions
export const CartActions = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  UPDATE_QUANTITY: 'UPDATE_QUANTITY',
  CLEAR_CART: 'CLEAR_CART',
  APPLY_PROMO_CODE: 'APPLY_PROMO_CODE',
  REMOVE_PROMO_CODE: 'REMOVE_PROMO_CODE'
};

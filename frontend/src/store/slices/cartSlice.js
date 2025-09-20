import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalItems: 0,
  subtotal: 0,
  shipping: 0,
  total: 0,
  promoCode: '',
  discount: 0
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { product, size, quantity = 1 } = action.payload;
      const existingItem = state.items.find(
        item => item.productId === product.id && item.size === size
      );

      if (existingItem) {
        existingItem.quantity += quantity;
        existingItem.totalPrice = existingItem.price * existingItem.quantity;
      } else {
        const cartItem = {
          id: `${product.id}-${size}`,
          productId: product.id,
          name: product.name,
          price: product.price,
          originalPrice: product.originalPrice,
          image: product.images[0],
          size,
          quantity,
          totalPrice: product.price * quantity
        };
        state.items.push(cartItem);
      }

      // Recalculate totals
      cartSlice.caseReducers.calculateTotals(state);
    },

    removeFromCart: (state, action) => {
      const itemId = action.payload;
      state.items = state.items.filter(item => item.id !== itemId);
      cartSlice.caseReducers.calculateTotals(state);
    },

    updateQuantity: (state, action) => {
      const { itemId, quantity } = action.payload;
      const item = state.items.find(item => item.id === itemId);
      
      if (item) {
        item.quantity = Math.max(1, quantity);
        item.totalPrice = item.price * item.quantity;
        cartSlice.caseReducers.calculateTotals(state);
      }
    },

    clearCart: (state) => {
      state.items = [];
      state.totalItems = 0;
      state.subtotal = 0;
      state.shipping = 0;
      state.total = 0;
      state.promoCode = '';
      state.discount = 0;
    },

    applyPromoCode: (state, action) => {
      const promoCode = action.payload;
      state.promoCode = promoCode;
      
      // Apply discount logic (10% discount for demo)
      if (promoCode.toLowerCase() === 'welcome10') {
        state.discount = state.subtotal * 0.1;
      }
      
      cartSlice.caseReducers.calculateTotals(state);
    },

    removePromoCode: (state) => {
      state.promoCode = '';
      state.discount = 0;
      cartSlice.caseReducers.calculateTotals(state);
    },

    calculateTotals: (state) => {
      state.totalItems = state.items.reduce((total, item) => total + item.quantity, 0);
      state.subtotal = state.items.reduce((total, item) => total + item.totalPrice, 0);
      state.shipping = 0; // Free shipping
      state.total = state.subtotal + state.shipping - state.discount;
    }
  }
});

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
  applyPromoCode,
  removePromoCode
} = cartSlice.actions;

export default cartSlice.reducer;

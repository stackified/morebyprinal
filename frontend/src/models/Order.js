// Order data structure
export const OrderModel = {
  id: '',
  orderNumber: '',
  userId: '',
  items: [],
  shippingAddress: {},
  billingAddress: {},
  paymentMethod: '',
  paymentStatus: 'pending',
  orderStatus: 'pending',
  subtotal: 0,
  shipping: 0,
  discount: 0,
  total: 0,
  promoCode: '',
  notes: '',
  createdAt: '',
  updatedAt: ''
};

// Order status options
export const OrderStatus = {
  PENDING: 'pending',
  CONFIRMED: 'confirmed',
  PROCESSING: 'processing',
  SHIPPED: 'shipped',
  DELIVERED: 'delivered',
  CANCELLED: 'cancelled',
  RETURNED: 'returned'
};

// Payment status options
export const PaymentStatus = {
  PENDING: 'pending',
  PAID: 'paid',
  FAILED: 'failed',
  REFUNDED: 'refunded'
};

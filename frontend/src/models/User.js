// User data structure
export const UserModel = {
  id: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: {
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'India'
  },
  preferences: {
    newsletter: false,
    notifications: true
  },
  createdAt: '',
  updatedAt: ''
};

// Contact form structure
export const ContactFormModel = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  orderNumber: ''
};

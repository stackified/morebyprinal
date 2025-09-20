import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  notifications: [],
  modals: {
    sizeChart: false,
    contactForm: false,
    checkout: false
  },
  sidebar: {
    mobileMenu: false,
    cartSidebar: false
  }
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },

    addNotification: (state, action) => {
      const notification = {
        id: Date.now(),
        type: action.payload.type || 'info',
        message: action.payload.message,
        duration: action.payload.duration || 3000
      };
      state.notifications.push(notification);
    },

    removeNotification: (state, action) => {
      state.notifications = state.notifications.filter(
        notification => notification.id !== action.payload
      );
    },

    clearNotifications: (state) => {
      state.notifications = [];
    },

    toggleModal: (state, action) => {
      const modalName = action.payload;
      state.modals[modalName] = !state.modals[modalName];
    },

    closeModal: (state, action) => {
      const modalName = action.payload;
      state.modals[modalName] = false;
    },

    toggleSidebar: (state, action) => {
      const sidebarName = action.payload;
      state.sidebar[sidebarName] = !state.sidebar[sidebarName];
    },

    closeSidebar: (state, action) => {
      const sidebarName = action.payload;
      state.sidebar[sidebarName] = false;
    }
  }
});

export const {
  setLoading,
  addNotification,
  removeNotification,
  clearNotifications,
  toggleModal,
  closeModal,
  toggleSidebar,
  closeSidebar
} = uiSlice.actions;

export default uiSlice.reducer;

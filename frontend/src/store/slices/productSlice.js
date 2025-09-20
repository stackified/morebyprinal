import { createSlice } from '@reduxjs/toolkit';
import { sampleProducts } from '../../models/Product';

const initialState = {
  products: sampleProducts,
  filteredProducts: sampleProducts,
  selectedProduct: null,
  loading: false,
  error: null,
  filters: {
    category: 'all',
    availability: 'all',
    priceRange: [0, 2000],
    searchTerm: ''
  },
  sortBy: 'featured'
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
      state.filteredProducts = action.payload;
    },

    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },

    setLoading: (state, action) => {
      state.loading = action.payload;
    },

    setError: (state, action) => {
      state.error = action.payload;
    },

    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
      productSlice.caseReducers.applyFilters(state);
    },

    setSortBy: (state, action) => {
      state.sortBy = action.payload;
      productSlice.caseReducers.applyFilters(state);
    },

    applyFilters: (state) => {
      let filtered = [...state.products];

      // Apply category filter
      if (state.filters.category !== 'all') {
        filtered = filtered.filter(product => 
          product.category.toLowerCase() === state.filters.category.toLowerCase()
        );
      }

      // Apply availability filter
      if (state.filters.availability === 'in-stock') {
        filtered = filtered.filter(product => product.inStock);
      }

      // Apply price range filter
      filtered = filtered.filter(product => 
        product.price >= state.filters.priceRange[0] && 
        product.price <= state.filters.priceRange[1]
      );

      // Apply search filter
      if (state.filters.searchTerm) {
        const searchTerm = state.filters.searchTerm.toLowerCase();
        filtered = filtered.filter(product =>
          product.name.toLowerCase().includes(searchTerm) ||
          product.description.toLowerCase().includes(searchTerm) ||
          product.tags.some(tag => tag.toLowerCase().includes(searchTerm))
        );
      }

      // Apply sorting
      switch (state.sortBy) {
        case 'price-low':
          filtered.sort((a, b) => a.price - b.price);
          break;
        case 'price-high':
          filtered.sort((a, b) => b.price - a.price);
          break;
        case 'name':
          filtered.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case 'latest':
          filtered.sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
          break;
        case 'featured':
        default:
          filtered.sort((a, b) => b.featured - a.featured);
          break;
      }

      state.filteredProducts = filtered;
    },

    clearFilters: (state) => {
      state.filters = {
        category: 'all',
        availability: 'all',
        priceRange: [0, 2000],
        searchTerm: ''
      };
      state.sortBy = 'featured';
      state.filteredProducts = state.products;
    }
  }
});

export const {
  setProducts,
  setSelectedProduct,
  setLoading,
  setError,
  setFilters,
  setSortBy,
  applyFilters,
  clearFilters
} = productSlice.actions;

export default productSlice.reducer;

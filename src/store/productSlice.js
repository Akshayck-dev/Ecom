import { createSlice } from '@reduxjs/toolkit';

const initialProducts = [
  {
    id: 'p1',
    name: 'Minimalist Ceramic Vase',
    price: 85,
    description: 'A hand-crafted sculptural piece for the modern sanctuary.',
    image: 'https://images.unsplash.com/photo-1581557991964-125469da3b8a?q=80&w=1000',
    category: 'Home'
  },
  {
    id: 'p2',
    name: 'Archival Table Lamp',
    price: 120,
    description: 'Soft, ambient lighting with a brutalist silhouette.',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=1000',
    category: 'Lighting'
  },
  {
    id: 'p3',
    name: 'Curated Linen Set',
    price: 240,
    description: 'Ethically sourced premium flax linen for timeless comfort.',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1000',
    category: 'Bedding'
  },
  {
    id: 'p4',
    name: 'Modular Shelving Unit',
    price: 450,
    description: 'Architectural precision meets functional storage.',
    image: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?q=80&w=1000',
    category: 'Furniture'
  }
];

const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: initialProducts,
    selectedProduct: null,
  },
  reducers: {
    setSelectedProduct(state, action) {
      state.selectedProduct = state.items.find(p => p.id === action.payload);
    }
  },
});

export const productActions = productSlice.actions;
export default productSlice.reducer;

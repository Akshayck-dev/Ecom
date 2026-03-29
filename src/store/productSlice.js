import { createSlice } from '@reduxjs/toolkit';

const initialProducts = [
  {
    id: 'p1',
    name: 'Alabaster Sculpture Vase',
    price: 120,
    description: 'A hand-crafted sculptural piece for the modern sanctuary.',
    image: 'https://images.unsplash.com/photo-1581557991964-125469da3b8a?q=80&w=1000',
    category: 'Home Decor',
    tag: 'NEW'
  },
  {
    id: 'p2',
    name: 'Core Horizon Watch',
    price: 345,
    description: 'Precision engineering meets minimalist aesthetic in this archival timepiece.',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000',
    category: 'Electronics',
    tag: 'TRENDING'
  },
  {
    id: 'p3',
    name: 'Linen Bound Journal',
    price: 34,
    description: 'Premium flax linen cover with high-gsm archival paper.',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1000',
    category: 'Stationery'
  },
  {
    id: 'p4',
    name: 'Oak Column Stand',
    price: 85,
    description: 'Solid oak pedestal for displaying curated objects.',
    image: 'https://images.unsplash.com/photo-1581781881744-8594628a5a27?q=80&w=1000',
    category: 'Home Decor'
  },
  {
    id: 'p5',
    name: 'Symphony Audio Gen 2',
    price: 299,
    description: 'Next-generation acoustics in a matte-finish studio housing.',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000',
    category: 'Electronics'
  },
  {
    id: 'p6',
    name: 'Glass Infusion Carafe',
    price: 45,
    description: 'Hand-blown borosilicate glass for the perfect ritual.',
    image: 'https://images.unsplash.com/photo-1517254456976-ee86820998ed?q=80&w=1000',
    category: 'Kitchenware'
  },
  {
    id: 'p7',
    name: 'Cognac Travel Duffel',
    price: 210,
    description: 'Full-grain leather with brass hardware for the global traveler.',
    image: 'https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=1000',
    category: 'Accessories'
  },
  {
    id: 'p8',
    name: 'Eco-Bamboo Organizer',
    price: 58,
    description: 'Sustainable bamboo storage for a mindful workspace.',
    image: 'https://images.unsplash.com/photo-1591129841117-3adfd313e34f?q=80&w=1000',
    category: 'Stationery',
    tag: 'NEW'
  },
  {
    id: 'p9',
    name: 'The Ethereal Linen Shirt',
    price: 185,
    description: 'Premium Belgian flax linen with a relaxed silhouette.',
    image: 'https://images.unsplash.com/photo-1594932224010-74f4aca4aa0a?q=80&w=1000',
    category: 'Textiles'
  },
  {
    id: 'p10',
    name: 'Hygge Lounge Chair',
    price: 1200,
    description: 'Scandinavian design principles meeting ultimate comfort.',
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1000',
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

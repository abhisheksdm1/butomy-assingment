import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { items: [], cartCount: 0, totalPrice: 0 },
  reducers: {
    cart(state, action) {
      const newItems = action.payload;
      const existingItem = state.items.find((item) => item.id === newItems.id);
      if (!existingItem) {
        state.cartCount = state.cartCount + 1;
        state.totalPrice = state.totalPrice + parseFloat(newItems.price);
        state.items.push({
          id: newItems.id,
          name: newItems.name,
          price: parseFloat(newItems.price),
          standarprice: parseFloat(newItems.price),
        });
        console.log(state.items);
      } else {
        existingItem.price =
          parseFloat(existingItem.price) + parseFloat(newItems.price); // Convert to number
        state.totalPrice = state.totalPrice + parseFloat(newItems.price);
      }
    },
    removeCart(state, action) {
      const newItems = action.payload;
      const existingItem = state.items.find((item) => item.id === newItems.id);
      if (existingItem) {
        existingItem.price =
          parseFloat(existingItem.price) - parseFloat(newItems.price);
        state.totalPrice = state.totalPrice - parseFloat(newItems.price); // Convert to number
        if (existingItem.price === 0) {
          state.items = state.items.filter(
            (item) => item.id !== existingItem.id
          );
          state.cartCount = state.cartCount - 1;
        }
      }
    },
    closeCart(state) {
      state.items = [];
      state.cartCount = 0;
      state.totalPrice = 0;
    },
  },
});

export const uiActions = uiSlice.actions;
// export const { cart, removeItemFromCart } = uiSlice.actions;

export default uiSlice;

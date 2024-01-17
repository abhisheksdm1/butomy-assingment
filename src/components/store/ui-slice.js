import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { items: [], cartCount: 0 },
  reducers: {
    cart(state, action) {
      const newItems = action.payload;
      const existingItem = state.items.find((item) => item.id === newItems.id);
      if (!existingItem) {
        state.cartCount = state.cartCount + 1;
        state.items.push({
          id: newItems.id,
          name: newItems.name,
          price: parseFloat(newItems.price),
        });
        console.log(state.items);
      } else {
        existingItem.price =
          parseFloat(existingItem.price) + parseFloat(newItems.price); // Convert to number
      }
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;

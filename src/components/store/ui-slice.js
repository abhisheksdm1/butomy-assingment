import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { items: [], cartCount: 0 },
  reducers: {
    cart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (!existingItem) {
        state.items.push({
          id: id,
        });
      } else {
        state.cartCount = state.cartCount + 1;
      }
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;

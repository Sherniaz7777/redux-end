import { createSlice } from "@reduxjs/toolkit";

const corzinSlice = createSlice({
  name: "corzins",
  initialState: {
    corzinka: [],
  },
  reducers: {
    addCart: (state, action) => {
        const newItem = action.payload;
        const existingItem = state.corzinka.find(
          (item) => item.idMeal === newItem.idMeal
        );
  
        if (existingItem) {
          // If item already exists, update its quantity
          existingItem.count++;
        } else {
          // If item doesn't exist, add it to the cart
          state.corzinka.push({ ...newItem, count: 1 });
        }
    },
    removeCart: (state, action) => {
      state.corzinka = state.corzinka.filter(
        (item) => item.idMeal !== action.payload
      );
    },
    incrementQuantity: (state, action) => {
      const idToUpdate = action.payload.id;
      const itemToUpdate = state.corzinka.find(
        (item) => item.idMeal === idToUpdate
      );
      if (itemToUpdate) {
        itemToUpdate.count++; // Mutating the existing object
      }
    },
    decrementQuantity: (state, action) => {
      const idToUpdate = action.payload.id;
      const itemToUpdate = state.corzinka.find(
        (item) => item.idMeal === idToUpdate
      );
      if (itemToUpdate && itemToUpdate.count > 1) {
        itemToUpdate.count--; // Mutating the existing object
      }
    },
  },
});

export const { addCart, removeCart, incrementQuantity, decrementQuantity } =
  corzinSlice.actions;
export default corzinSlice.reducer;

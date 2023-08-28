import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
    },
    reducers:{
        addProduct:(state,action)=>{
            state.products.push(action.payload);
            state.quantity += 1;
            state.total += action.payload.price * action.payload.quantity;
        },
        removeProduct: (state, action) => {
            const removedProduct = action.payload;
            const index = state.products.findIndex(product => product.id === removedProduct.id);
          
            if (index !== -1) {
              state.quantity -= removedProduct.quantity;
              state.total -= removedProduct.price * removedProduct.quantity;
              state.products.splice(index, 1);
            }
          },
        setSelectedShipping: (state, action) => {
            state.selectedShipping = action.payload;
          },
        reset:(state)=> {
          state.products = [];
          state.quantity = 0;
          state.total = 0;
        },
    },
});

export const {addProduct,removeProduct, setSelectedShipping, reset} = cartSlice.actions;
export default cartSlice.reducer;
 
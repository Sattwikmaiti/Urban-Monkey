"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.addProduct = void 0;

var _toolkit = require("@reduxjs/toolkit");

var cartSlice = (0, _toolkit.createSlice)({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0
  },
  reducers: {
    addProduct: function addProduct(state, action) {
      //console.log("add",action)
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    }
  }
});
var addProduct = cartSlice.actions.addProduct;
exports.addProduct = addProduct;
var _default = cartSlice.reducer;
exports["default"] = _default;
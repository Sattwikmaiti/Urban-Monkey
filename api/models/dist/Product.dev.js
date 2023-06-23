"use strict";

var mongoose = require("mongoose");

var ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  desc: {
    type: String,
    required: true
  },
  img1: {
    type: String,
    required: true
  },
  img2: {
    type: String,
    required: true
  },
  isnew: {
    type: Boolean,
    required: true
  },
  categories: {
    type: Array
  },
  size: {
    type: String
  },
  color: {
    type: String
  },
  oldPrice: {
    type: Number,
    required: true
  },
  newPrice: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
});
module.exports = mongoose.model("Product", ProductSchema);
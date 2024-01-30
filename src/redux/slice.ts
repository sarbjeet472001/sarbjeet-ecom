import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../model";
import type { PayloadAction } from "@reduxjs/toolkit";
import { title } from "process";

const initialState: any = {
  products: [],
  shouldRetain: false,
  cartProducts: [],
  productToUpdate: [],
};

// interface data{
//     name:Product[]
// }

// for test

export const slice = createSlice({
  name: "filterprice",
  initialState,
  reducers: {
    getdata: (state: any, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    filterPrice: (state: any, action: PayloadAction<Product[]>) => {
      // console.log("called", [...action.payload]);
      let data = [...action.payload];
      data.sort((a, b) => a.price - b.price);

      state.products = data;
      state.shouldRetain = true;
    },
    filtercategory: (state: any, action: PayloadAction<any>) => {
      const data = state.products.filter(
        (item: any) => item.category === action.payload
      );
      state.products = data;
      state.shouldRetain = true;
    },

    addToCart: (state: any, action: PayloadAction<any>) => {
      // console.log(action.payload)
      // console.log(state.products);
      const data = state.products.filter(
        (item: any) => item.id === action.payload
      );
      state.cartProducts.push(data);
    },

    addProduct: (state: any, action: PayloadAction<any>) => {
      state.products.push({
        ...action.payload,
        id: state.products[state.products.length - 1].id + 1,
      });
      state.shouldRetain = true;
    },
    deleteProduct: (state: any, action: PayloadAction<any>) => {
      const data = state.products.filter((item: any) => {
        return item.id !== action.payload;
      });

      const data1 = state.cartProducts.filter((item: any) => {
        return item.id !== action.payload;
      });

      state.products = data;
      state.cartProducts = data1;
      state.shouldRetain = true;
    },
    getProduct: (state: any, action: PayloadAction<any>) => {
      console.log("action", action.payload);
      const p = [...state.products];
      const data = p.find((item: any) => {
        return item.id === action.payload;
      });
      console.log(data);
      state.productToUpdate = data;
    },
    updateProduct: (state: any, action: PayloadAction<any>) => {
      const { title, description, price, category, thumbnail } = action.payload;
      state.products.forEach((element: Product, index: number) => {
        if (element.id === state.productToUpdate.id) {
          state.products[index] = {
            ...element,
            title,
            description,
            price,
            category,
            thumbnail,
          };
        }
      });
      state.shouldRetain = true;
    },
  },
});

export const getdata = slice.actions;
//hello

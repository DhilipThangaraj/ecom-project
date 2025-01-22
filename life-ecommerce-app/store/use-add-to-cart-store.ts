// import { create } from "zustand";
// import { CartItem, Product } from "../types";

// interface StoreState {
//   cart: CartItem[];
//   addToCart: (product: Product) => void;
//   removeFromCart: (id: string) => void;
// }

// export const useStore = create<StoreState>((set) => ({
//   cart: [],
//   addToCart: (product) =>
//     set((state) => {
//       const exsistingItem = state.cart.find((item) => item.id === product.id);
//       if (exsistingItem) {
//         return {
//           cart: state.cart.map((item) =>
//             item.id === product.id
//               ? { ...item, quantity: item.quantity + 1 }
//               : item
//           ),
//         };
//       } else {
//         return { cart: [...state.cart, { ...product, quantity: 1 }] };
//       }
//     }),
//   removeFromCart: (id) =>
//     set((state) => ({
//       cart: state.cart.filter((item) => item.id !== id),
//     })),
// }));

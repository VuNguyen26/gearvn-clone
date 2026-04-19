"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product } from "@/types/product";

export type CartItem = {
  productId: string;
  name: string;
  price: number;
  image: string;
  qty: number;
  maxQty: number;
  slug: string;
};

type CartState = {
  items: CartItem[];
  add: (p: Product, qty?: number) => void;
  remove: (productId: string) => void;
  setQty: (productId: string, qty: number) => void;
  increment: (productId: string) => void;
  decrement: (productId: string) => void;
  clear: () => void;
  count: () => number;
  total: () => number;
};

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      add: (p, qty = 1) => {
        const price = p.salePrice ?? p.price;
        set((state) => {
          const existing = state.items.find((i) => i.productId === p.id);

          if (existing) {
            return {
              items: state.items.map((i) => {
                if (i.productId !== p.id) return i;
                const next = Math.min(i.maxQty, i.qty + qty);
                return { ...i, qty: next };
              }),
            };
          }

          return {
            items: [
              ...state.items,
              {
                productId: p.id,
                name: p.name,
                price,
                image: p.images[0],
                qty: Math.min(qty, p.stock),
                maxQty: p.stock,
                slug: p.slug,
              },
            ],
          };
        });
      },

      remove: (productId) =>
        set((state) => ({
          items: state.items.filter((i) => i.productId !== productId),
        })),

      setQty: (productId, qty) =>
        set((state) => ({
          items: state.items.map((i) => {
            if (i.productId !== productId) return i;
            const safe = Math.max(1, Math.min(i.maxQty, qty));
            return { ...i, qty: safe };
          }),
        })),

      increment: (productId) =>
        set((state) => ({
          items: state.items.map((i) => {
            if (i.productId !== productId) return i;
            const next = Math.min(i.maxQty, i.qty + 1);
            return { ...i, qty: next };
          }),
        })),

      decrement: (productId) =>
        set((state) => {
          const existing = state.items.find((i) => i.productId === productId);

          if (!existing) return state;

          if (existing.qty <= 1) {
            return {
              items: state.items.filter((i) => i.productId !== productId),
            };
          }

          return {
            items: state.items.map((i) => {
              if (i.productId !== productId) return i;
              return { ...i, qty: i.qty - 1 };
            }),
          };
        }),

      clear: () => set({ items: [] }),
      count: () => get().items.reduce((s, i) => s + i.qty, 0),
      total: () => get().items.reduce((s, i) => s + i.price * i.qty, 0),
    }),
    { name: "gearvn_cart_v1" }
  )
);
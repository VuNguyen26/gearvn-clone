"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CartItem } from "@/store/cart";
import type { CheckoutInfo } from "@/store/checkout";

export type OrderStatus =
  | "new"
  | "processing"
  | "shipping"
  | "completed"
  | "cancelled";

export type OrderItem = CartItem;

export type Order = {
  id: string;
  code: string;
  createdAt: string;
  updatedAt?: string;
  status: OrderStatus;
  cancelReason?: string | null;
  customer: CheckoutInfo;
  items: OrderItem[];
  subtotal: number;
  shippingFee: number;
  total: number;
};

type OrdersState = {
  orders: Order[];
  addOrder: (order: Order) => void;
  setStatus: (orderId: string, status: OrderStatus) => void;
  cancelOrder: (orderId: string, reason: string) => void;
  clearOrders: () => void;
};

export const useOrders = create<OrdersState>()(
  persist(
    (set) => ({
      orders: [],
      addOrder: (order) =>
        set((state) => ({
          orders: [order, ...state.orders],
        })),

      setStatus: (orderId, status) =>
        set((state) => ({
          orders: state.orders.map((order) =>
            order.id === orderId
              ? {
                  ...order,
                  status,
                  updatedAt: new Date().toISOString(),
                }
              : order
          ),
        })),

      cancelOrder: (orderId, reason) =>
        set((state) => ({
          orders: state.orders.map((order) =>
            order.id === orderId
              ? {
                  ...order,
                  status: "cancelled",
                  cancelReason: reason,
                  updatedAt: new Date().toISOString(),
                }
              : order
          ),
        })),

      clearOrders: () => set({ orders: [] }),
    }),
    {
      name: "gearvn_orders_v1",
    }
  )
);
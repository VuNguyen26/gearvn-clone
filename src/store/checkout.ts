"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export type CheckoutInfo = {
  gender: "Anh" | "Chị";
  fullName: string;
  phone: string;
  city: string;
  district: string;
  ward: string;
  address: string;
  note: string;
  deliveryMethod: "delivery" | "pickup";
  paymentMethod: "cod";
};

type CheckoutState = {
  info: CheckoutInfo | null;
  setInfo: (info: CheckoutInfo) => void;
  clearInfo: () => void;
};

export const useCheckout = create<CheckoutState>()(
  persist(
    (set) => ({
      info: null,
      setInfo: (info) => set({ info }),
      clearInfo: () => set({ info: null }),
    }),
    { name: "gearvn_checkout_v1" }
  )
);
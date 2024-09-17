import { create } from "zustand";

type CounterStoreType = {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
};

export const useCounterStore = create<CounterStoreType>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () =>
    set((state) => {
      if (state.count > 0) {
        return { count: state.count - 1 };
      }
      return { count: state.count };
    }),
  reset: () => set({ count: 0 }),
}));

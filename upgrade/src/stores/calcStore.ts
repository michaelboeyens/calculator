import { defineStore } from "pinia";
import type { CalcStoreState } from "@/types/StoreTypes";

export const calcStore = defineStore("calcStore", {
  state: (): CalcStoreState => {
    return {
      history: [],
      firstInput: null,
      secondInput: null,
      operation: null,
    };
  },
  getters: {
    historyLength: (state) => state.history.length,
  },
});

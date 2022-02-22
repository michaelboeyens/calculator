import { defineStore } from "pinia";
import type { CalcStoreState } from "@/types/StoreTypes";

export const calcStore = defineStore("calcStore", {
  state: (): CalcStoreState => {
    return {
      history: [],
      firstInput: null,
      secondInput: null,
      operation: null,
      buttons: [
        { content: "1", property: "numb", value: 1 },
        { content: "2", property: "numb", value: 2 },
        { content: "3", property: "numb", value: 3 },
        { content: "4", property: "numb", value: 4 },
        { content: "5", property: "numb", value: 5 },
        { content: "6", property: "numb", value: 6 },
        { content: "7", property: "numb", value: 7 },
        { content: "8", property: "numb", value: 8 },
        { content: "9", property: "numb", value: 9 },
        { content: "0", property: "numb", value: 0 },
        { content: "CE", property: "symbol", value: null },
        { content: "C", property: "symbol", value: null },
        { content: "DEL", property: "symbol", value: null },
        { content: "±", property: "symbol", value: null },
        { content: ",", property: "symbol", value: null },
        { content: "%", property: "singleMathSymbol", value: null },
        { content: "1/x", property: "singleMathSymbol", value: null },
        { content: "x²", property: "singleMathSymbol", value: null },
        { content: "√", property: "singleMathSymbol", value: null },
        { content: "÷", property: "mathSymbol", value: null },
        { content: "x", property: "mathSymbol", value: null },
        { content: "-", property: "mathSymbol", value: null },
        { content: "+", property: "mathSymbol", value: null },
        { content: "=", property: "calculate", value: null },
      ],
    };
  },
  getters: {
    historyLength: (state) => state.history.length,
  },
});

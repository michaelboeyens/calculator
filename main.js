const app = new Vue({
  el: "#app",
  data() {
    return {
      buttons: [
        { content: "%", property: "currentMathsymbol" },
        { content: "CE", property: "symbol" },
        { content: "C", property: "symbol" },
        { content: "DEL", property: "symbol" },
        { content: "1/x", property: "currentMathsymbol" },
        { content: "x²", property: "currentMathsymbol" },
        { content: "√", property: "currentMathsymbol" },
        { content: "÷", property: "mathsymbol" },
        { content: "7", property: "numb" },
        { content: "8", property: "numb" },
        { content: "9", property: "numb" },
        { content: "×", property: "mathsymbol" },
        { content: "4", property: "numb" },
        { content: "5", property: "numb" },
        { content: "6", property: "numb" },
        { content: "−", property: "mathsymbol" },
        { content: "1", property: "numb" },
        { content: "2", property: "numb" },
        { content: "3", property: "numb" },
        { content: "+", property: "mathsymbol" },
        { content: "±", property: "symbol" },
        { content: "0", property: "numb" },
        { content: ",", property: "symbol" },
        { content: "=", property: "symbol" },
      ],
      /** object params: {equation: string, result: int}
       *
       * @var array
       */
      calcHistory: [],
      currentNumb: "",
      lastInput: "",
      topNumb: null,
      operator: "",
      result: null,
    };
  },
  computed: {
    mainDisp() {
      if (this.topNumb === null && this.currentNumb === "") {
        if (this.calcHistory.length === 0 || this.lastInput.value !== "=") {
          return "0";
        } else {
          return this.calcHistory[0].result;
        }
      } else if (this.currentNumb.startsWith(".")) {
        return "0" + this.currentNumb;
      } else {
        return this.currentNumb ? this.currentNumb : "0";
      }
    },
    topDisp() {
      if (this.topNumb === null && this.currentNumb === "") {
        if (this.calcHistory.length === 0 || this.lastInput.value !== "=") {
          return "0";
        } else {
          return this.calcHistory[0].equation;
        }
      } else {
        return this.topNumb ? this.topNumb + " " + this.operator : "0";
      }
    },
  },
  methods: {
    numbClick(value, property) {
      this.lastInput = { value: value, property: property };
      if (property === "numb" && (value !== "0" || this.currentNumb !== "")) {
        this.currentNumb += value;
      } else if (property === "symbol") {
        this.checkSymbol(value);
      } else if (property === "mathsymbol") {
        this.checkMathSymbol(value);
      } else if (property === "currentMathsymbol") {
        this.checkCurrentMathSymbol();
      }
    },
    checkSymbol(value) {
      switch (value) {
        case "DEL":
          this.currentNumb = this.currentNumb.slice(0, -1);
          break;
        case "C":
          this.topNumb = null;
          this.operator = "";
        case "CE":
          this.currentNumb = "";
          break;
        case "=":
          if (this.topNumb !== null) {
            this.checkMathSymbol(value);
            this.checkSymbol("C");
          }
          break;
        case ",":
          !this.currentNumb.includes(".") ? (this.currentNumb += ".") : "";
          break;
        case "±":
          if (this.currentNumb.startsWith("-")) {
            this.currentNumb = this.currentNumb.slice(
              1,
              this.currentNumb.length
            );
          } else {
            this.currentNumb = "-" + this.currentNumb;
          }
          break;
        default:
          if (this.currentNumb !== "") {
            this.topNumb = this.currentNumb;
            this.operator = value;
            this.currentNumb = "";
          }
          break;
      }
    },
    checkMathSymbol(value) {
      if (this.topNumb === null) {
        switch (value) {
          default:
            if (this.currentNumb !== "") {
              this.topNumb = this.currentNumb * 1;
              this.operator = value;
              this.currentNumb = "";
            }
            break;
        }
      } else if (this.currentNumb !== "" && this.topNumb !== null) {
        this.result = this.calcResult();
        this.calcHistory.unshift({
          equation:
            this.topNumb +
            " " +
            this.operator +
            " " +
            this.currentNumb * 1 +
            " =",
          result: this.result,
        });
        this.topNumb = this.result;
        this.operator = this.lastInput.value;
        this.currentNumb = "";
      }
    },
    calcResult() {
      let secondNumb = this.currentNumb * 1;
      switch (this.operator) {
        case "+":
          return this.topNumb + secondNumb;
        case "−":
          return this.topNumb - secondNumb;
        case "×":
          return this.topNumb * secondNumb;
        case "÷":
          return this.topNumb / secondNumb;
      }
    },
    checkCurrentMathSymbol() {
      if (this.currentNumb !== "") {
        switch (this.lastInput.value) {
          case "1/x":
            this.currentNumb = (1 / (this.currentNumb * 1)).toString();
            break;
          case "√":
            this.currentNumb = Math.sqrt(this.currentNumb * 1).toString();
            break;
          case "x²":
            this.currentNumb = Math.pow(this.currentNumb * 1, 2).toString();
            break;
          case "%":
            if (this.topNumb !== null) {
              this.currentNumb = (
                this.topNumb *
                ((this.currentNumb * 1) / 100)
              ).toString();
            }
            break;
        }
      }
    },
  },
});

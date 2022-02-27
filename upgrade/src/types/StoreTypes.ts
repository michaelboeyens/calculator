export type CalcStoreState = {
  history: History[];
  firstInput: string | null;
  secondInput: string | null;
  operation: string | null;
  buttons: Button[];
  result: string | null;
};

interface History {
  equation: string;
  result: string;
}

interface Button {
  content: string;
  property: ButtonProperty;
  value: number | string | null;
}

type ButtonProperty =
  | "numb"
  | "symbol"
  | "mathSymbol"
  | "calculate"
  | "singleMathSymbol";

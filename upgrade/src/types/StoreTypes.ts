export type CalcStoreState = {
  history: History[];
  firstInput: number | null;
  secondInput: number | null;
  operation: string | null;
};

interface History {
  equation: string;
  result: string;
}

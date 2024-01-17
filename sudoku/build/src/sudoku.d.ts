import { SmartContract, State } from 'o1js';
export { Sudoku, SudokuZkApp };
declare const Sudoku_base: (new (value: {
    value: import("o1js/dist/node/lib/field").Field[][];
}) => {
    value: import("o1js/dist/node/lib/field").Field[][];
}) & {
    _isStruct: true;
} & import("o1js/dist/node/snarky").ProvablePure<{
    value: import("o1js/dist/node/lib/field").Field[][];
}> & {
    toInput: (x: {
        value: import("o1js/dist/node/lib/field").Field[][];
    }) => {
        fields?: import("o1js/dist/node/lib/field").Field[] | undefined;
        packed?: [import("o1js/dist/node/lib/field").Field, number][] | undefined;
    };
    toJSON: (x: {
        value: import("o1js/dist/node/lib/field").Field[][];
    }) => {
        value: string[][];
    };
    fromJSON: (x: {
        value: string[][];
    }) => {
        value: import("o1js/dist/node/lib/field").Field[][];
    };
    empty: () => {
        value: import("o1js/dist/node/lib/field").Field[][];
    };
};
declare class Sudoku extends Sudoku_base {
    static from(value: number[][]): Sudoku;
    hash(): import("o1js/dist/node/lib/field").Field;
}
declare class SudokuZkApp extends SmartContract {
    sudokuHash: State<import("o1js/dist/node/lib/field").Field>;
    isSolved: State<import("o1js/dist/node/lib/bool").Bool>;
    init(): void;
    update(sudokuInstance: Sudoku): void;
    submitSolution(sudokuInstance: Sudoku, solutionInstance: Sudoku): void;
}

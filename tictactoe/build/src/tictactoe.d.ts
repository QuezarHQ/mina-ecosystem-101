import { Field, State, PublicKey, SmartContract, Bool, Signature } from 'o1js';
export { Board, TicTacToe };
declare const OptionalBool_base: {
    new (isSome: boolean | import("o1js/dist/node/lib/bool").Bool, value: import("o1js/dist/node/lib/bool").Bool): {
        toFields(): import("o1js/dist/node/lib/field").Field[];
        isSome: import("o1js/dist/node/lib/bool").Bool;
        value: import("o1js/dist/node/lib/bool").Bool;
    };
    _isStruct: true;
    toFields: (value: {
        isSome: import("o1js/dist/node/lib/bool").Bool;
        value: import("o1js/dist/node/lib/bool").Bool;
    }) => import("o1js/dist/node/lib/field").Field[];
    toAuxiliary: (value?: {
        isSome: import("o1js/dist/node/lib/bool").Bool;
        value: import("o1js/dist/node/lib/bool").Bool;
    } | undefined) => any[];
    fromFields: (fields: import("o1js/dist/node/lib/field").Field[], aux: any[]) => {
        isSome: import("o1js/dist/node/lib/bool").Bool;
        value: import("o1js/dist/node/lib/bool").Bool;
    };
    sizeInFields(): number;
    check: (value: {
        isSome: import("o1js/dist/node/lib/bool").Bool;
        value: import("o1js/dist/node/lib/bool").Bool;
    }) => void;
    toInput: (x: {
        isSome: import("o1js/dist/node/lib/bool").Bool;
        value: import("o1js/dist/node/lib/bool").Bool;
    }) => {
        fields?: import("o1js/dist/node/lib/field").Field[] | undefined;
        packed?: [import("o1js/dist/node/lib/field").Field, number][] | undefined;
    };
    toJSON: (x: {
        isSome: import("o1js/dist/node/lib/bool").Bool;
        value: import("o1js/dist/node/lib/bool").Bool;
    }) => {
        isSome: boolean;
        value: {
            toFields: {};
            toAuxiliary: {};
            fromFields: {};
            sizeInFields: {};
            check: {};
        };
    };
    fromJSON: (x: {
        isSome: boolean;
        value: {
            toFields: {};
            toAuxiliary: {};
            fromFields: {};
            sizeInFields: {};
            check: {};
        };
    }) => {
        isSome: import("o1js/dist/node/lib/bool").Bool;
        value: import("o1js/dist/node/lib/bool").Bool;
    };
};
declare class OptionalBool extends OptionalBool_base {
}
declare class Board {
    board: OptionalBool[][];
    constructor(serializedBoard: Field);
    serialize(): Field;
    update(x: Field, y: Field, playerToken: Bool): void;
    printState(): void;
    checkWinner(): Bool;
}
declare class TicTacToe extends SmartContract {
    board: State<import("o1js/dist/node/lib/field").Field>;
    nextIsPlayer2: State<import("o1js/dist/node/lib/bool").Bool>;
    gameDone: State<import("o1js/dist/node/lib/bool").Bool>;
    player1: State<PublicKey>;
    player2: State<PublicKey>;
    init(): void;
    startGame(player1: PublicKey, player2: PublicKey): void;
    play(pubkey: PublicKey, signature: Signature, x: Field, y: Field): void;
}

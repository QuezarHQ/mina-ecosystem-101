import { Field, SmartContract, State } from 'o1js';
export declare class Square extends SmartContract {
    num: State<import("o1js/dist/node/lib/field").Field>;
    init(): void;
    update(square: Field): void;
}

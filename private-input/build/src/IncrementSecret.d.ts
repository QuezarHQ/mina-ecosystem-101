import { Field, SmartContract, State } from 'o1js';
export declare class IncrementSecret extends SmartContract {
    x: State<import("o1js/dist/node/lib/field").Field>;
    initState(salt: Field, firstSecret: Field): void;
    incrementSecret(salt: Field, secret: Field): void;
}

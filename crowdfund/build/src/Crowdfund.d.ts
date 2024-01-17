import { Field, SmartContract, State } from 'o1js';
export declare class Crowdfund extends SmartContract {
    goal: State<import("o1js/dist/node/lib/field").Field>;
    initState(goal: Field): void;
}

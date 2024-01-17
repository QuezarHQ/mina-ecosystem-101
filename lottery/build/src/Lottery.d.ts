import { Field, SmartContract, State } from 'o1js';
export declare class Lottery extends SmartContract {
    events: {
        "Lottery Status": typeof import("o1js/dist/node/lib/field").Field & ((x: string | number | bigint | import("o1js/dist/node/lib/field").Field | import("o1js/dist/node/lib/field").FieldVar | import("o1js/dist/node/lib/field").FieldConst) => import("o1js/dist/node/lib/field").Field);
        "Amount Transferred": typeof import("o1js/dist/node/lib/field").Field & ((x: string | number | bigint | import("o1js/dist/node/lib/field").Field | import("o1js/dist/node/lib/field").FieldVar | import("o1js/dist/node/lib/field").FieldConst) => import("o1js/dist/node/lib/field").Field);
    };
    x: State<import("o1js/dist/node/lib/field").Field>;
    status: State<import("o1js/dist/node/lib/field").Field>;
    initState(salt: Field, secret: Field): void;
    tryLottery(salt: Field, secret: Field): void;
}

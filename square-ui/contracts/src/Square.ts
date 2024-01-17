import {
    Field,
    SmartContract,
    method,
    state,
    State
} from 'o1js';

export class Square extends SmartContract {

     @state(Field) num = State<Field>();
     
     init() {
        super.init();
        this.num.set(Field(3));
     }

     @method update(square: Field) {
        const currentState = this.num.get();
        this.num.requireEquals(currentState);
        square.assertEquals(currentState.mul(currentState));
        this.num.set(square);
     }

}
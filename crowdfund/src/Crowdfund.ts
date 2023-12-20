import { Field, SmartContract, state, State, method } from 'o1js';

export class Crowdfund extends SmartContract {
  @state(Field) pool = State<Field>();

  @method initState(seed: Field) {
    this.pool.set(seed);
  }

  @method incrementPool(amount: Field) {
    const pool = this.pool.get();
    this.pool.assertEquals(pool);

    this.pool.set(pool.add(amount));
  }
}
import { Field, SmartContract, state, State, method } from 'o1js';

export class Lottery extends SmartContract {
  @state(Field) pool = State<Field>();
  @state(Field) tickets = State<Field>();
  @state(Field) winningTicket = State<Field>();

  @method initState(lotterysize: Field) {
    this.pool.set(lotterysize);
    // TODO initialise tickets & winning ticket
  }

  @method buyTicket(price: Field) {
    // TODO add logic for giving away the tickets
  }

  @method declareLottery() {
    // TODO add logic for declaring lottery once all the tickets are sold. 
  }
}
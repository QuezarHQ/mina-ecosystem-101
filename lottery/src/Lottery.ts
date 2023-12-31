import { Field, SmartContract, state, State, method } from 'o1js';

export class Lottery extends SmartContract {
  @state(Field) pool = State<Field>();
  @state(Field) tickets = State<Field>();
  @state(Field) winningTicket = State<Field>();

  @method initState(lotterysize: Field, tickets: Field) {
    this.pool.set(lotterysize);
    this.tickets.set(tickets);
    this.winningTicket.set(Field(0));
  }

  @method buyTicket(price: Field) {
    // TODO add logic for giving away the tickets
  }

  @method declareLottery() {
    // TODO add logic for declaring lottery once all the tickets are sold. 
  }
}
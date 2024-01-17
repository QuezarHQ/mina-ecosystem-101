import { 
    Field, 
    SmartContract, 
    state, 
    State, 
    method 
} from 'o1js';

export class Crowdfund extends SmartContract {
  @state(Field) goal = State<Field>();

  @method initState(goal: Field) {
    this.goal.set(goal);
  }

}
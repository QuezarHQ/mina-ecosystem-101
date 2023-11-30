import { 
    
    Field, 
    // The native number type in o1js. You can think of Field elements as unsigned integers. Field elements are the most basic type in o1js. All other o1js-compatible types are built on top of Field elements.

    SmartContract, 
    // The class that creates zkApp smart contracts.
    
    state,
    // A convenience decorator used in zkApp smart contracts to create references to state stored on-chain in a zkApp account.
    
    State,
    // A class used in zkApp smart contracts to create state stored on-chain in a zkApp account.
    
    method 
    // A convenience decorator used in zkApp smart contracts to create smart contract methods like functions. Methods that use this decorator are the end user's entry points to interacting with a smart contract.
  
  } from 'o1js';
  
  export class Square extends SmartContract {

    @state(Field) num = State<Field>();
    // here we create an on-chain state named num of type Field
    // Note - zkApps can have up to eight fields of on-chain state. Each field stores up to 32 bytes (technically, 31.875 bytes or 255 bits) of arbitrary data
  
    // method to set up the initial state of the smart contract on deployment
    init() {

      super.init();
      // SmartContract has its own initialization to perform
      // calling this invokes this function on the base class.
      
      this.num.set(Field(3)); // initializes the on-chain state num to a value of 3
    }
  
    // @method is used because it is intended to be invoked by end users by using a zkApp UI, or as in this case, the main.ts script
    @method update(square: Field) {

      /* 

      This method contains the logic by which end users are allowed to update the zkApp's account state on chain.

      A zkApp account is an account on the Mina blockchain where a zkApp smart contract is deployed. A zkApp account has a verification key associated with it

      If the user provides a number (for example, 9) to the update() method that is the square of the existing on-chain state referred to as num (for example, 3), then update the num value that is stored on-chain to the provided value (in this case, 9).
      
      If the user provides a number that does not meet these conditions, they are unable to generate a proof or update the on-chain state
      */

      const currentState = this.num.get(); 
      // get() method is used for retrieving on-chain state
      
      this.num.assertEquals(currentState);
      square.assertEquals(currentState.mul(currentState));
      // These update conditions are accomplished by using assertions within the method. When a user invokes a method on a smart contract, all assertions must be true to generate the zero-knowledge proof from that smart contract. The Mina network accepts the transaction and updates the on-chain state only if the attached proof is valid. This assertion is how you can achieve predictable behavior in an off-chain execution model.
      
      this.num.set(square);
      // set() methods are used for setting the on-chain state
    }
  }
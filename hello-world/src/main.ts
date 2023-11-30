import { Square } from './Square.js';

import {

  Field,
  // The same o1js unsigned integer type that you learned earlier.

  Mina,
  // A local Mina blockchain to deploy the smart contract to so you can interact with it as a user would.

  PrivateKey,
  // A class with functions for manipulating private keys.

  AccountUpdate,
  // A class that generates a data structure that can update zkApp accounts.

} from 'o1js';

const useProof = false;

// Using a local blockchain speeds up development and tests the behavior of your smart contract locally. Later tutorials cover how to deploy a zkApp to live Mina networks.

const Local = Mina.LocalBlockchain({ proofsEnabled: useProof });
Mina.setActiveInstance(Local);

// This local blockchain also provides pre-funded accounts. These lines create local test accounts with test MINA to use for this tutorial:

const { privateKey: deployerKey, publicKey: deployerAccount } = Local.testAccounts[0];
const { privateKey: senderKey, publicKey: senderAccount } = Local.testAccounts[1];

// ----------------------------------------------------

// Create a public/private key pair. The public key is your address and where you deploy the zkApp to
const zkAppPrivateKey = PrivateKey.random();
const zkAppAddress = zkAppPrivateKey.toPublicKey();

// create an instance of Square - and deploy it to zkAppAddress
const zkAppInstance = new Square(zkAppAddress);
const deployTxn = await Mina.transaction(deployerAccount, () => {
  AccountUpdate.fundNewAccount(deployerAccount);
  zkAppInstance.deploy();
});
await deployTxn.sign([deployerKey, zkAppPrivateKey]).send();

// get the initial state of Square after deployment
const num0 = zkAppInstance.num.get();
console.log('state after init:', num0.toString());

// ----------------------------------------------------

const txn1 = await Mina.transaction(senderAccount, () => {
  zkAppInstance.update(Field(9));
});
await txn1.prove();
await txn1.sign([senderKey]).send();

const num1 = zkAppInstance.num.get();
console.log('state after txn1:', num1.toString());

// ----------------------------------------------------

try {
  const txn2 = await Mina.transaction(senderAccount, () => {
    zkAppInstance.update(Field(75));
  });
  await txn2.prove();
  await txn2.sign([senderKey]).send();
} catch (ex: any) {
  console.log(ex.message);
}
const num2 = zkAppInstance.num.get();
console.log('state after txn2:', num2.toString());

// ----------------------------------------------------

const txn3 = await Mina.transaction(senderAccount, () => {
  zkAppInstance.update(Field(81));
});
await txn3.prove();
await txn3.sign([senderKey]).send();

const num3 = zkAppInstance.num.get();
console.log('state after txn3:', num3.toString());

// ----------------------------------------------------

console.log('Shutting down');
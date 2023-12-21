import { Crowdfund } from './Crowdfund.js';

import {
  Field,
  Mina,
  PrivateKey,
  AccountUpdate,
} from 'o1js';

const useProof = false;

const Local = Mina.LocalBlockchain({ proofsEnabled: useProof });
Mina.setActiveInstance(Local);

const { privateKey: deployerKey, publicKey: deployerAccount } = Local.testAccounts[0];
const { privateKey: senderKey, publicKey: senderAccount } = Local.testAccounts[1];

const zkAppPrivateKey = PrivateKey.random();
const zkAppAddress = zkAppPrivateKey.toPublicKey();

const zkAppInstance = new Crowdfund(zkAppAddress);
const deployTxn = await Mina.transaction(deployerAccount, () => {
  AccountUpdate.fundNewAccount(deployerAccount);
  zkAppInstance.deploy();
});
await deployTxn.sign([deployerKey, zkAppPrivateKey]).send();

const num0 = zkAppInstance.pool.get();
console.log('state after init:', num0.toString());

// ----------------------------------------------------

const txn1 = await Mina.transaction(senderAccount, () => {
  zkAppInstance.incrementPool(Field(9));
});
await txn1.prove();
await txn1.sign([senderKey]).send();

const num1 = zkAppInstance.pool.get();
console.log('state after txn1:', num1.toString());

// ----------------------------------------------------

try {
  const txn2 = await Mina.transaction(senderAccount, () => {
    zkAppInstance.incrementPool(Field(75));
  });
  await txn2.prove();
  await txn2.sign([senderKey]).send();
} catch (ex: any) {
  console.log(ex.message);
}
const num2 = zkAppInstance.pool.get();
console.log('state after txn2:', num2.toString());

// ----------------------------------------------------

const txn3 = await Mina.transaction(senderAccount, () => {
  zkAppInstance.incrementPool(Field(81));
});
await txn3.prove();
await txn3.sign([senderKey]).send();

const num3 = zkAppInstance.pool.get();
console.log('state after txn3:', num3.toString());

// ----------------------------------------------------

console.log('Shutting down');
import { Lottery } from './Lottery.js';

import {
  Field,
  Mina,
  PrivateKey,
  AccountUpdate,
  UInt32,
} from 'o1js';


const useProof = false;

const Local = Mina.LocalBlockchain({ proofsEnabled: useProof });
Mina.setActiveInstance(Local);
const { privateKey: deployerKey, publicKey: deployerAccount } =
  Local.testAccounts[0];
const { privateKey: senderKey, publicKey: senderAccount } =
  Local.testAccounts[1];

const salt = Field.random();

// ----------------------------------------------------

console.log('\nInitiating zkApp setup...');

const zkAppPrivateKey = PrivateKey.random();
const zkAppAddress = zkAppPrivateKey.toPublicKey();

const zkAppInstance = new Lottery(zkAppAddress);
const deployTxn = await Mina.transaction(deployerAccount, () => {
  AccountUpdate.fundNewAccount(deployerAccount);
  zkAppInstance.deploy();
  zkAppInstance.initState(salt, Field(750));
});
await deployTxn.prove();
await deployTxn.sign([deployerKey, zkAppPrivateKey]).send();

const x = zkAppInstance.x.get();
console.log('x after init:', x.toString());

const status0 = zkAppInstance.status.get();
console.log('status after init:', status0.toString());

console.log("zkApp Balance after init:", zkAppInstance.account.balance.get().value.toString());

// ----------------------------------------------------

console.log('\nInitiating transaction 1...');

const txn1 = await Mina.transaction(deployerAccount, () => {
  let deployerUpdate = AccountUpdate.create(deployerAccount);
  deployerUpdate.requireSignature();
  deployerUpdate.send({ to: zkAppAddress, amount: 100 });
})
await txn1.prove();
await txn1.sign([deployerKey]).send();

console.log("ZkApp Balance after txn1:", zkAppInstance.account.balance.get().value.toString());


// ----------------------------------------------------

console.log('\nInitiating transaction 2...');

const txn2 = await Mina.transaction(senderAccount, () => {
  zkAppInstance.tryLottery(salt, Field(750));
});
await txn2.prove();
await txn2.sign([senderKey]).send();

console.log("ZkApp Balance after txn2:", zkAppInstance.account.balance.get().value.toString());

const events = await zkAppInstance.fetchEvents(UInt32.from(0));
console.log(events);
console.log('Event 1: ', events[0].type, events[0].event.data.toString());
console.log('Event 2: ', events[1].type, events[1].event.data.toString());

console.log("\nTransaction 2 in prettified format:\n", txn2.toPretty());

// ----------------------------------------------------

console.log('\nInitiating transaction 3...');

try {
    const txn3 = await Mina.transaction(senderAccount, () => {
        zkAppInstance.tryLottery(salt, Field(750));
    });
    await txn3.prove();
    await txn3.sign([senderKey]).send();
  } catch (ex: any) {
    console.log(ex.message);
  }

console.log("ZkApp Balance after txn3:", zkAppInstance.account.balance.get().value.toString());

// ----------------------------------------------------

console.log('\nShutting down');
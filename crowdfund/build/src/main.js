import { Crowdfund } from './Crowdfund.js';
import { Field, Mina, PrivateKey, AccountUpdate, } from 'o1js';
const useProof = false;
const Local = Mina.LocalBlockchain({ proofsEnabled: useProof });
Mina.setActiveInstance(Local);
const { privateKey: deployerKey, publicKey: deployerAccount } = Local.testAccounts[0];
const { privateKey: senderKey, publicKey: senderAccount } = Local.testAccounts[1];
// ----------------------------------------------------
console.log('\nInitiating zkApp setup...');
const zkAppPrivateKey = PrivateKey.random();
const zkAppAddress = zkAppPrivateKey.toPublicKey();
const zkAppInstance = new Crowdfund(zkAppAddress);
const deployTxn = await Mina.transaction(deployerAccount, () => {
    AccountUpdate.fundNewAccount(deployerAccount);
    zkAppInstance.deploy();
    zkAppInstance.initState(Field(1000));
});
await deployTxn.prove();
await deployTxn.sign([deployerKey, zkAppPrivateKey]).send();
const goal = zkAppInstance.goal.get();
console.log('Goal set to:', goal.toString());
// ----------------------------------------------------
console.log('\nInitiating transaction 1...');
console.log("Crowdfund Balance before txn1:", zkAppInstance.account.balance.get().value.toString(), "/", goal.toString());
const txn1 = await Mina.transaction(senderAccount, () => {
    let senderUpdate = AccountUpdate.create(senderAccount);
    senderUpdate.requireSignature();
    senderUpdate.send({ to: zkAppAddress, amount: 1 });
});
await txn1.prove();
await txn1.sign([senderKey]).send();
console.log("Crowdfund Balance after txn1:", zkAppInstance.account.balance.get().value.toString(), "/", goal.toString());
// ----------------------------------------------------
console.log('\nInitiating transaction 2...');
console.log("Crowdfund Balance before txn2:", zkAppInstance.account.balance.get().value.toString(), "/", goal.toString());
const txn2 = await Mina.transaction(senderAccount, () => {
    let senderUpdate = AccountUpdate.create(senderAccount);
    senderUpdate.requireSignature();
    senderUpdate.send({ to: zkAppAddress, amount: 100 });
});
await txn2.prove();
await txn2.sign([senderKey]).send();
console.log("Crowdfund Balance after txn2:", zkAppInstance.account.balance.get().value.toString(), "/", goal.toString());
console.log("\nTransaction 2 in prettified format:\n", txn2.toPretty());
// ----------------------------------------------------
console.log('\nShutting down');
//# sourceMappingURL=main.js.map
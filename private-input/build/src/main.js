import { PrivateInput } from './PrivateInput.js';
import { Field, Mina, PrivateKey, AccountUpdate, } from 'o1js';
const useProof = false;
const Local = Mina.LocalBlockchain({ proofsEnabled: useProof });
Mina.setActiveInstance(Local);
const { privateKey: deployerKey, publicKey: deployerAccount } = Local.testAccounts[0];
const { privateKey: senderKey, publicKey: senderAccount } = Local.testAccounts[1];
const salt = Field.random();
// ----------------------------------------------------
console.log('\nInitiating zkApp setup...');
const zkAppPrivateKey = PrivateKey.random();
const zkAppAddress = zkAppPrivateKey.toPublicKey();
const zkAppInstance = new PrivateInput(zkAppAddress);
const deployTxn = await Mina.transaction(deployerAccount, () => {
    AccountUpdate.fundNewAccount(deployerAccount);
    zkAppInstance.deploy();
    zkAppInstance.initState(salt, Field(750));
});
await deployTxn.prove();
await deployTxn.sign([deployerKey, zkAppPrivateKey]).send();
const num0 = zkAppInstance.x.get();
console.log('state after init:', num0.toString());
// ----------------------------------------------------
console.log('\nInitiating transaction 1...');
const txn1 = await Mina.transaction(senderAccount, () => {
    zkAppInstance.incrementSecret(salt, Field(750));
});
await txn1.prove();
await txn1.sign([senderKey]).send();
const num1 = zkAppInstance.x.get();
console.log('state after txn1:', num1.toString());
// ----------------------------------------------------
console.log('\nInitiating transaction 2...');
try {
    const txn2 = await Mina.transaction(senderAccount, () => {
        zkAppInstance.incrementSecret(salt, Field(800));
    });
    await txn2.prove();
    await txn2.sign([senderKey]).send();
}
catch (ex) {
    console.log(ex.message);
}
const num2 = zkAppInstance.x.get();
console.log('state after txn2:', num2.toString());
// ----------------------------------------------------
console.log('\nShutting down...\n');
//# sourceMappingURL=main.js.map
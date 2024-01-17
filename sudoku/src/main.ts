import { Sudoku, SudokuZkApp } from './Sudoku.js';
import { cloneSudoku, generateSudoku, solveSudoku } from './sudoku-lib.js';
import { AccountUpdate, Mina, PrivateKey } from 'o1js';


const Local = Mina.LocalBlockchain();
Mina.setActiveInstance(Local);

const { privateKey: senderKey, publicKey: sender } = Local.testAccounts[0];

const sudoku = generateSudoku(0.5);

const zkAppPrivateKey = PrivateKey.random();
const zkAppAddress = zkAppPrivateKey.toPublicKey();
const zkApp = new SudokuZkApp(zkAppAddress);

console.log('Deploying and initializing Sudoku...');
await SudokuZkApp.compile();
let tx = await Mina.transaction(sender, () => {
  AccountUpdate.fundNewAccount(sender);
  zkApp.deploy();
  zkApp.update(Sudoku.from(sudoku));
});
await tx.prove();
await tx.sign([zkAppPrivateKey, senderKey]).send();

console.log('Is the sudoku solved?', zkApp.isSolved.get().toBoolean());

let solution = solveSudoku(sudoku);
if (solution === undefined) throw Error('cannot happen');

// ----- submitting the wrong solution -----

let noSolution = cloneSudoku(solution);
noSolution[0][0] = (noSolution[0][0] % 9) + 1;

console.log('Submitting wrong solution...');
try {
  let tx = await Mina.transaction(sender, () => {
    zkApp.submitSolution(Sudoku.from(sudoku), Sudoku.from(noSolution));
  });
  await tx.prove();
  await tx.sign([senderKey]).send();
} catch {
  console.log('There was an error submitting the solution, as expected');
}

console.log('Is the sudoku solved?', zkApp.isSolved.get().toBoolean());

// ----- submitting the correct solution -----

console.log('Submitting solution...');
tx = await Mina.transaction(sender, () => {
  zkApp.submitSolution(Sudoku.from(sudoku), Sudoku.from(solution!));
});
await tx.prove();
await tx.sign([senderKey]).send();

console.log('Is the sudoku solved?', zkApp.isSolved.get().toBoolean());

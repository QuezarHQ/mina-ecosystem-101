var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Field, SmartContract, state, State, method, Poseidon } from 'o1js';
export class Lottery extends SmartContract {
    constructor() {
        super(...arguments);
        this.events = {
            "Lottery Status": Field,
            "Amount Transferred": Field,
        };
        this.x = State();
        this.status = State();
    }
    initState(salt, secret) {
        this.x.set(Poseidon.hash([salt, secret]));
        this.status.set(Field(0));
    }
    tryLottery(salt, secret) {
        this.status.requireEquals(Field(0));
        const x = this.x.get();
        this.x.requireEquals(x);
        Poseidon.hash([salt, secret]).assertEquals(x);
        this.account.balance.requireEquals(this.account.balance.get());
        this.send({ to: this.sender, amount: this.account.balance.get() });
        this.emitEvent("Amount Transferred", Field(1));
        this.status.set(Field(1));
        this.emitEvent("Lottery Status", Field(1));
    }
}
__decorate([
    state(Field),
    __metadata("design:type", Object)
], Lottery.prototype, "x", void 0);
__decorate([
    state(Field),
    __metadata("design:type", Object)
], Lottery.prototype, "status", void 0);
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Field, Field]),
    __metadata("design:returntype", void 0)
], Lottery.prototype, "initState", null);
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Field, Field]),
    __metadata("design:returntype", void 0)
], Lottery.prototype, "tryLottery", null);
//# sourceMappingURL=Lottery.js.map
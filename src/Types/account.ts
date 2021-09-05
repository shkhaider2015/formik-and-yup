export interface IAccount {
    accountNumber : number
    bankName : string
    balance : number
    accountType : "Current Account" | "Savings Account" | "Foreign Currency Account"
}
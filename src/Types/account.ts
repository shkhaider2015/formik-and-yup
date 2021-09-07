import * as yup from "yup"

export interface IAccount {
    accountNumber : number
    bankName : string
    balance : number
    accountType : "Current Account" | "Savings Account" | "Foreign Currency Account"
}

export const accountInitialValues:IAccount = {
    accountNumber : 0,
    balance : 0,
    bankName : '',
    accountType : 'Savings Account',
}

export const accountValidationSchema = yup.object({
    accountNumber : yup.number().required(),
    balance : yup.number().required(),
    bankName : yup.string().required(),
    accountType : yup.string().required(),
})
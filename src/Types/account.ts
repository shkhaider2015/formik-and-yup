import * as yup from "yup"
import { DIGITS_LENGTH, MATCHES, NONE_ZERO, REQUIRED, SHOULD_BE_INTEGER } from "./HardCode";

export interface IAccount {
    accountNumber : number
    bankName : string
    balance : number
    accountType : "Current Account" | "Savings Account" | "Foreign Currency Account" | ""
}

export const accountInitialValues:IAccount = {
    accountNumber : 0,
    balance : 0,
    bankName : '',
    accountType : '',
}

export const accountValidationSchema = yup.object({
    accountNumber : yup.string().matches(/^[0-9]+$/, MATCHES).min(8, DIGITS_LENGTH).max(8, DIGITS_LENGTH).required(REQUIRED),
    balance : yup.number().integer(SHOULD_BE_INTEGER).min(1, NONE_ZERO).required(REQUIRED),
    bankName : yup.string().required(REQUIRED),
    accountType : yup.mixed().oneOf(["Current Account", "Savings Account", "Foreign Currency Account" ], "Select correct account type").required(REQUIRED),
})
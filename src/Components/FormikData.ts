import { IUser } from "../Types/user";
import { IAccount } from "../Types/account";
import { IAdmission } from "../Types/admission";
import yup from "yup"

interface IFormik extends IUser, IAccount, IAdmission{
}

export const initialValues:IFormik = {
    firstName : '',
    lastname : '',
    email : '',
    password : '',
    address : '',
    accountNumber : 0,
    balance : 0,
    bankName : '',
    accountType : 'Savings Account',
    department : 'Computer',
    program : '',
    batch : '',
    year : ''
}

export const ValidationSchema = yup.object({
    firstName : yup.string().max(10, "Must be 10 charechter or less").required(),
    lastName : yup.string().max(10, "Must be 10 charecters or less").required(),
    email : yup.string().email().required(),
    password : yup.string().min(6, "Password should be at least 6 charecters").max(12, "Password should not be axceeds to 10 chars").required(),
    address : yup.string().max(30, "Address must be less than 31 chars").required(),
    accountNumber : yup.number().required(),
    balance : yup.number().required(),
    bankName : yup.string().required(),
    accountType : yup.string().required(),
    department : yup.string().required(),
    program : yup.string().required(),
    batch : yup.string().required(),
    year : yup.string().required()
}) 
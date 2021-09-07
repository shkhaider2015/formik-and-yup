import * as yup from "yup"

export interface IUser {
    firstName: string
    lastName: string
    address: string
    email: string
    password: string
    confirmPassword: string
}

export const userInitialValues: IUser = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    address: '',
}

export const userValidationSchema = yup.object({
    firstName: yup.string().max(10, "Must be 10 charechter or less").required(),
    lastName: yup.string().max(10, "Must be 10 charecters or less").required(),
    email: yup.string().email().required(),
    password: yup.string().min(6, "Password should be at least 6 charecters").max(12, "Password should not be axceeds to 10 chars").required(),
    confirmPassword: yup.string().min(6, "Password should be at least 6 charecters").max(12, "Password should not be axceeds to 10 chars").when("password", {
        is: (val: string) => (val && val.length > 6 && val.length < 12 ? true : false),
        then: yup.string().oneOf([yup.ref("password")], "Both passwords need to be same")
    }).required(),
    address: yup.string().max(30, "Address must be less than 31 chars").required()
})
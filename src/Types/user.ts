import * as yup from "yup"
import { ADRESS, BOTH_PASSWORD, MAXIMUM_PASSWORD, MINIMUM_PASSWORD, NAMING, REQUIRED } from "./HardCode"

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
    firstName: yup.string().max(10, NAMING).required(REQUIRED),
    lastName: yup.string().max(10, NAMING).required(REQUIRED),
    email: yup.string().email().required(REQUIRED),
    password: yup.string().min(6, MINIMUM_PASSWORD).max(12, MAXIMUM_PASSWORD).required(REQUIRED),
    confirmPassword: yup.string().min(6, MINIMUM_PASSWORD).max(12, MAXIMUM_PASSWORD).when("password", {
        is: (val: string) => (val && val.length > 6 && val.length < 12 ? true : false),
        then: yup.string().oneOf([yup.ref("password")], BOTH_PASSWORD)
    }).required(REQUIRED),
    address: yup.string().max(30, ADRESS).required(REQUIRED)
})
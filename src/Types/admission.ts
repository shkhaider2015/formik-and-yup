import * as yup from "yup"

export interface IAdmission {
    department : "Computer" | "Electrical" | "Machenical" | "Civil" | "Textile" | "Chemical"
    program : string
    batch : string
    year : string
}

export const admissionInitialValues:IAdmission = {
    department : 'Computer',
    program : '',
    batch : '',
    year : ''
}

export const admissionValidationSchema = yup.object({
    department : yup.string().required(),
    program : yup.string().required(),
    batch : yup.string().required(),
    year : yup.string().required()
})
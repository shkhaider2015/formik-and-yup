import * as yup from "yup"
import { REQUIRED } from "./HardCode"

export interface IAdmission {
    department : "Computer" | "Electrical" | "Machenical" | "Civil" | "Textile" | "Chemical" | ""
    program : string
    batch : string
    year : string
}

export const admissionInitialValues:IAdmission = {
    department : '',
    program : '',
    batch : '',
    year : ''
}

export const admissionValidationSchema = yup.object({
    department : yup.mixed().oneOf(["Computer", "Electrical" , "Machenical" , "Civil" , "Textile" , "Chemical"  ], "Select correct department").required(REQUIRED),
    program : yup.string().required(REQUIRED),
    batch : yup.string().required(REQUIRED),
    year : yup.string().required(REQUIRED)
})
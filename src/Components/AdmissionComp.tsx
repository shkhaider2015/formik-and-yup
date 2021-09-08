import {Button} from "react-bootstrap"
import { FormikProps, useFormik } from "formik"
import { Form } from "react-bootstrap"
import { Dispatch, FC, SetStateAction } from "react-transition-group/node_modules/@types/react"
import { admissionInitialValues, admissionValidationSchema, IAdmission } from "../Types/admission"
import { IFormik } from "./FormikData"

type propType = {
    step : number
    values : any
    setStep : Dispatch<SetStateAction<number>>
    setValues :Dispatch<SetStateAction<any>>
}

export const AdmissionComp: FC<propType> = ({ step, setStep, values, setValues }) => {

    const formik:FormikProps<IAdmission>  = useFormik<IAdmission>({
        initialValues : admissionInitialValues,
        validationSchema: admissionValidationSchema,
        onSubmit: val => {
            setStep(step+1)
            setValues({...val, ...values})
        }
    })

    return <form onSubmit={formik.handleSubmit} className="ps-3 pe-3 w-50 shadow" >
        <Form.Group className="p-3" >
            <Form.Control
                id="department"
                type="text"
                placeholder="Department"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.department}
            />
            <Form.Text className="text-muted" >
                {
                    formik.touched.department && formik.errors.department
                        ? formik.errors.department
                        : null
                }
            </Form.Text>
        </Form.Group>

        <div className="d-flex flex-direction-column justify-content-between p-3" >
            <Form.Group className="w-50 pe-3" >
                <Form.Control
                    id="batch"
                    className="w-100"
                    type="text"
                    placeholder="Batch No."
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.batch}
                />
                <Form.Text className="text-muted" >
                    {
                        formik.touched.batch && formik.errors.batch
                            ? formik.errors.batch
                            : null
                    }
                </Form.Text>
            </Form.Group>

            <Form.Group className="w-50 ps-3" >
                <Form.Control
                    id="year"
                    className="w-100"
                    type="text"
                    placeholder="Year"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.year}
                />
                <Form.Text className="text-muted" >
                    {
                        formik.touched.year && formik.errors.year
                            ? formik.errors.year
                            : null
                    }
                </Form.Text>
            </Form.Group>

        </div>

        <Form.Group className="p-3">
            <Form.Control
            id="program"
                type="text"
                placeholder="Program"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.program}
            />
            <Form.Text className="text-muted" >
                {
                    formik.touched.program && formik.errors.program
                        ? formik.errors.program
                        : null
                }
            </Form.Text>
        </Form.Group>

        <div className="mt-4" >
            <Button className="pt-2 pb-2 ps-4 pe-4 me-3" >Back</Button>
            <Button
                className="pt-2 pb-2 ps-4 pe-4 ms-3"
                type="submit"
            >Next</Button>
        </div>

    </form>
}
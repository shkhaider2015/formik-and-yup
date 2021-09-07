import {Button} from "react-bootstrap"
import { FormikProps, useFormik } from "formik"
import { Form } from "react-bootstrap"
import { FC, Dispatch, SetStateAction } from "react-transition-group/node_modules/@types/react"
import { accountInitialValues, accountValidationSchema, IAccount } from "../Types/account"
import { IFormik } from "./FormikData"

type propType = {
    step: number
    setStep : Dispatch<SetStateAction<number>>
}

export const AccountComp: FC<propType> = ({ step, setStep }) => {
    const formik: FormikProps<IAccount> = useFormik<IAccount>({
        initialValues: accountInitialValues,
        validationSchema: accountValidationSchema,
        onSubmit: values => {
            setStep(step+1)
        }
    })

    return <div className="ps-3 pe-3 pt-3 pb-3 w-50 shadow" >
        <Form.Group className="p-3" >
            <Form.Control
                id="accountNumber"
                type="number"
                placeholder="Account Number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.accountNumber}
            />
            <Form.Text className="text-muted" >
                {
                    formik.touched.accountNumber && formik.errors.accountNumber
                        ? formik.errors.accountNumber
                        : null
                }
            </Form.Text>
        </Form.Group>

        <div className="d-flex flex-direction-column justify-content-between p-3" >
            <Form.Group className="w-50 pe-3" >
                <Form.Control
                    id="balance"
                    className="w-100"
                    type="number"
                    placeholder="Balance"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.balance}
                />
                <Form.Text className="text-muted" >
                    {
                        formik.touched.balance && formik.errors.balance
                            ? formik.errors.balance
                            : null
                    }
                </Form.Text>
            </Form.Group>

            <Form.Group className="w-50 ps-3" >
                <Form.Control
                    id="accountType"
                    className="w-100"
                    type="text"
                    placeholder="Account Type"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.accountType}
                />
                <Form.Text className="text-muted" >
                    {
                        formik.touched.accountType && formik.errors.accountType
                            ? formik.errors.accountType
                            : null
                    }
                </Form.Text>
            </Form.Group>
        </div>

        <Form.Group className="p-3">
            <Form.Control
                id="bankName"
                type="text"
                placeholder="Bank Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.bankName}
            />
            <Form.Text className="text-muted" >
                {
                    formik.touched.bankName && formik.errors.bankName
                        ? formik.errors.bankName
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
    </div>
}
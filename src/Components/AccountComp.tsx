import {Button} from "react-bootstrap"
import { FormikProps, useFormik } from "formik"
import { Form } from "react-bootstrap"
import { FC, Dispatch, SetStateAction } from "react"
import { accountInitialValues, accountValidationSchema, IAccount } from "../Types/account"

type propType = {
    step: number
    values : any
    setStep : Dispatch<SetStateAction<number>>
    setValues :Dispatch<SetStateAction<any>>
}

export const AccountComp: FC<propType> = ({ step, setStep, values, setValues  }) => {
    const formik: FormikProps<IAccount> = useFormik<IAccount>({
        initialValues: accountInitialValues,
        validationSchema: accountValidationSchema,
        onSubmit: val => {
            setStep(step+1)
            setValues({...val, ...values})
        }
    })

    return <form onSubmit={formik.handleSubmit} className="ps-3 pe-3 pt-3 pb-3 w-50 shadow rounded" >
        <Form.Group className="p-3" >
            <Form.Control
                id="accountNumber"
                type="number"
                placeholder="Account Number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.accountNumber}
                required
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
                    required
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
            <Form.Select 
                id="accountType"
                aria-label="Floating label select example"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.accountType}
                required
                >
                    <option value="">Select Account</option>
                    <option value="Savings Account">Savings Account</option>
                    <option value="Current Account">Current Account</option>
                    <option value="Foreign Currency Account">Foreign Currency Account</option>
            </Form.Select>
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
                required
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
            <Button 
                className="pt-2 pb-2 ps-4 pe-4 me-3"
                onClick={() => setStep(step-1)} 
            >Back</Button>
            <Button
                className="pt-2 pb-2 ps-4 pe-4 ms-3"
                type="submit"
            >Next</Button>
        </div>
    </form>
}
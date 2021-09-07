import {Button} from "react-bootstrap"
import { FormikProps, useFormik } from "formik"
import { Form } from "react-bootstrap"
import { FC, Dispatch, SetStateAction } from "react-transition-group/node_modules/@types/react"
import { IUser, userInitialValues, userValidationSchema } from "../Types/user"

type propType = {
    step : number,
    setStep : Dispatch<SetStateAction<number>>
}

export const UserComp: FC<propType> = ({ step, setStep }) => {

    const formik:FormikProps<IUser> = useFormik<IUser>({
        initialValues : userInitialValues,
        validationSchema: userValidationSchema,
        onSubmit: values => {
            // alert(JSON.stringify(values, null, 2))
            console.log("Submit : ", values)
            setStep(step+1)
        },
    })

    return <form onSubmit={formik.handleSubmit} className="ps-3 pe-3 w-50 shadow" >
        <div className="d-flex flex-direction-column justify-content-between p-3" >
            <Form.Group className="w-50 pe-3" >
                <Form.Control
                    id="firstName"
                    className="w-100"
                    type="text"
                    placeholder="First Name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                />
                <Form.Text className="text-muted" >
                    {
                        formik.touched.firstName && formik.errors.firstName
                            ? formik.errors.firstName
                            : null
                    }
                </Form.Text>
            </Form.Group>

            <Form.Group className="w-50 ps-3" >
                <Form.Control
                    id="lastName"
                    className="w-100"
                    type="text"
                    placeholder="Last Name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName}
                />
                <Form.Text className="text-muted" >
                    {
                        formik.touched.lastName && formik.errors.lastName
                            ? formik.errors.lastName
                            : null
                    }
                </Form.Text>
            </Form.Group>

        </div>
        <Form.Group className="p-3" >
            <Form.Control
                id="email"
                type="email"
                placeholder="Email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
            />
            <Form.Text className="text-muted" >
                {
                    formik.touched.email && formik.errors.email
                        ? formik.errors.email
                        : null
                }
            </Form.Text>
        </Form.Group>

        <Form.Group className="p-3">
            <Form.Control
                id="password"
                type="password"
                placeholder="Password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
            />
            <Form.Text className="text-muted" >
                {
                    formik.touched.password && formik.errors.password
                        ? formik.errors.password
                        : null
                }
            </Form.Text>
        </Form.Group>

        <Form.Group className="p-3">
            <Form.Control
                id="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmPassword}
            />
            <Form.Text className="text-muted" >
                {
                    formik.touched.confirmPassword && formik.errors.confirmPassword
                        ? formik.errors.confirmPassword
                        : null
                }
            </Form.Text>
        </Form.Group>

        <Form.Group className="p-3">
            <Form.Control
                id="address"
                type="text"
                placeholder="Address"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.address}
            />
            <Form.Text className="text-muted" >
                {
                    formik.touched.address && formik.errors.address
                        ? formik.errors.address
                        : null
                }
            </Form.Text>
        </Form.Group>

        <div className="mt-4" >
            <Button className="pt-2 pb-2 ps-4 pe-4 me-3" >Back</Button>
            <Button
                variant="primary"
                className="pt-2 pb-2 ps-4 pe-4 ms-3"
                type="submit"
            >Next</Button>
        </div>

    </form>
}
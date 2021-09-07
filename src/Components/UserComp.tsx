import { FormikProps } from "formik"
import { Form } from "react-bootstrap"
import { FC } from "react-transition-group/node_modules/@types/react"
import { IFormik } from "./FormikData"

type propsType = {
    formik: FormikProps<IFormik>
}

export const UserComp: FC<propsType> = ({ formik }) => {
    return <div className="ps-3 pe-3 w-50 shadow" >
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
                    value={formik.values.lastname}
                />
                <Form.Text className="text-muted" >
                    {
                        formik.touched.lastname && formik.errors.lastname
                            ? formik.errors.lastname
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

    </div>
}
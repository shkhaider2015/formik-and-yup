import { FormikProps } from "formik"
import { Form } from "react-bootstrap"
import { FC } from "react-transition-group/node_modules/@types/react"
import { IFormik } from "./FormikData"

type propsType = {
    formik: FormikProps<IFormik>
}

export const AdmissionComp: FC<propsType> = ({ formik }) => {
    return <div className="ps-3 pe-3 w-50 shadow" >
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

    </div>
}
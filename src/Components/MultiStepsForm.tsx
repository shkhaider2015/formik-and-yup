import { FormikProps, useFormik } from "formik"
import { Button } from "react-bootstrap"
import { AccountComp } from "./AccountComp"
import { initialValues, ValidationSchema, IFormik } from "./FormikData"

export const MultiStepsForm = () => {
    // const formik = useFormik({
    //     initialValues : initialValues,
    //     validationSchema : ValidationSchema,
    //     onSubmit : values => {
    //         alert(JSON.stringify(values, null, 2))
    //     }
    // })

    const formik: FormikProps<IFormik> = useFormik<IFormik>({
        initialValues,
        validationSchema: ValidationSchema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2))
        }
    })

    return <div className="row" >
        <div className="col-12 text-center p-5">
            <h1>MultiSteps Form </h1>
        </div>
        <div className="col-12 d-flex justify-content-center text-center" >
            <AccountComp formik={formik} />
        </div>
        <div className="col-12 text-center p-5">
            <Button>Back</Button> <Button>Next</Button>
        </div>
    </div>
}
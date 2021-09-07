import { FormikProps, useFormik } from "formik"
import { Button } from "react-bootstrap"
import { useState } from "react"
import { AccountComp } from "./AccountComp"
import { AdmissionComp } from "./AdmissionComp"
import { initialValues, ValidationSchema, IFormik } from "./FormikData"
import { UserComp } from "./UserComp"

const GetForm = (step :number, formik:FormikProps<IFormik>) => {
    switch (step) {
        case 0:
            return <UserComp formik={formik} />
        case 1:
            return <AccountComp formik={formik} />
        case 2:
            return <AdmissionComp formik={formik} />
        default:
            return <div> <h1>Complete !!</h1> </div>
    }
}

export const MultiStepsForm = () => {

    const formik: FormikProps<IFormik> = useFormik<IFormik>({
        initialValues,
        validationSchema: ValidationSchema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2))
        }
    })

    const [step, setStep] = useState<number>(0);


    return <div className="row" >
        <div className="col-12 text-center p-5">
            <h1>MultiSteps Form </h1>
        </div>
        <div className="col-12 d-flex justify-content-center text-center" >
            {
                GetForm(step, formik)
            }
            {console.log(formik.errors ? formik.errors : "No Error")}
            
        </div>
        <div className="col-12 text-center p-5">
            <Button>Back</Button> 
            <Button type="submit"
            >Next</Button>
        </div>
    </div>
}
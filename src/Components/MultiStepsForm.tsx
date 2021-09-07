import { FormikProps, useFormik } from "formik"
import { Button } from "react-bootstrap"
import { useState, Dispatch, SetStateAction } from "react"
import { AccountComp } from "./AccountComp"
import { AdmissionComp } from "./AdmissionComp"
import { initialValues, ValidationSchema, IFormik } from "./FormikData"
import { UserComp } from "./UserComp"

const GetForm = (step :number, setStep:Dispatch<SetStateAction<number>>) => {
    switch (step) {
        case 0:
            return <UserComp step={step} setStep={setStep} />
        case 1:
            return <AccountComp step={step} setStep={setStep} />
        case 2:
            return <AdmissionComp step={step} setStep={setStep} />
        default:
            return <div> <h1>Complete !!</h1> </div>
    }
}

export const MultiStepsForm = () => {

    const [step, setStep] = useState<number>(0);


    return <div className="row" >
        <div className="col-12 text-center p-5">
            <h1>MultiSteps Form </h1>
        </div>
        <div className="col-12 text-center " >
            
            <div className="d-flex justify-content-center" >
            {
                GetForm(step, setStep)
            }
            </div>
            
            
            
        </div>
        <div className="col-12 text-center p-5">
        </div>
    </div>
}
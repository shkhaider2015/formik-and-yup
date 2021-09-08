import { FormikProps, useFormik } from "formik"
import { Button } from "react-bootstrap"
import { useState, Dispatch, SetStateAction, FC, ReactHTMLElement } from "react"
import { AccountComp } from "./AccountComp"
import { AdmissionComp } from "./AdmissionComp"
import { initialValues, ValidationSchema, IFormik } from "./FormikData"
import { UserComp } from "./UserComp"

const GetForm = (step :number, values :any, setStep:Dispatch<SetStateAction<number>>, setValues :Dispatch<SetStateAction<any>>) => {
    switch (step) {
        case 0:
            return <UserComp step={step} setStep={setStep} setValues={setValues} values={values} />
        case 1:
            return <AccountComp step={step} setStep={setStep} setValues={setValues} values={values} />
        case 2:
            return <AdmissionComp step={step} setStep={setStep} setValues={setValues} values={values} />
        default:
            return <div className="text-center" > <h1>Complete !!</h1> 
                {
                  Object.keys(values).map((key:any, index:number) => (
                      <div key={index} className="d-flex flex-row" >
                          <p className="ms-2" > {key} </p>
                          <p className="ms-2" > {values[key]} </p>
                        
                      </div>
                  ))
                }
                <Button 
                    className="ps-3 pe-3"
                    variant="primary"
                    onClick={() => {
                        setStep(0)
                        setValues({})
                    }}
                >
                    Reset
                </Button>
            </div>
    }
}

export const MultiStepsForm = () => {

    const [step, setStep] = useState<number>(0);
    const [values, setValues] = useState({});


    return <div className="row" >
        <div className="col-12 text-center p-5">
            <h1>MultiSteps Form </h1>
        </div>
        <div className="col-12 text-center " >
            
            <div className="d-flex justify-content-center" >
            {
                GetForm(step, values, setStep, setValues)
            }
            </div>
            
            
            
        </div>
        <div className="col-12 text-center p-5">
        </div>
    </div>
}
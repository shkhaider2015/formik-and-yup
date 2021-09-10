import { Button } from "react-bootstrap"
import { useState, Dispatch, SetStateAction } from "react"
import { AccountComp } from "./AccountComp"
import { AdmissionComp } from "./AdmissionComp"
import { UserComp } from "./UserComp"
import { AccountSVG, AdmissionSVG, UserInfoSVG, CompleteSVG } from "../Static/static";

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

const myPrimaryColor:string = "#1976D2";
const mySecondaryColor:string = "#dedede";

export const MultiStepsForm = () => {

    const [step, setStep] = useState<number>(0);
    const [values, setValues] = useState({});


    return <div className="row" >
       
            <div className="col-12 d-flex justify-content-center mt-2 ">
            <UserInfoSVG width="3rem" height="3rem" fill={step >= 0 ? myPrimaryColor : mySecondaryColor} />
            <hr style={{ width : '15vw', height: '3px' , marginBottom : 'auto', marginTop : 'auto', color : `${ step > 0 ? myPrimaryColor : mySecondaryColor }`, marginLeft : '1rem', marginRight : '1rem'  }} />
            <AccountSVG width="3rem" height="3rem" fill={step >= 1 ? myPrimaryColor : mySecondaryColor} />
            <hr style={{ width : '15vw', height: '3px' , marginBottom : 'auto', marginTop : 'auto', color : `${ step > 1 ? myPrimaryColor : mySecondaryColor }`, marginLeft : '1rem', marginRight : '1rem'  }}/>
            <AdmissionSVG width="3rem" height="3rem" fill={step >= 2 ? myPrimaryColor : mySecondaryColor} />
            <hr style={{ width : '15vw', height: '3px' , marginBottom : 'auto', marginTop : 'auto', color : `${ step > 2 ? myPrimaryColor : mySecondaryColor }`, marginLeft : '1rem', marginRight : '1rem'  }}/>
            <CompleteSVG width="3rem" height="3rem" fill={step >= 3 ? myPrimaryColor : mySecondaryColor} />

        </div>
            
        <div className="col-12 text-center p-5">
            <span 
                style={{ 
                    fontFamily : "fantasy", 
                    fontSize : '3rem',
                    WebkitTextFillColor : 'white',
                    WebkitTextStrokeColor : myPrimaryColor,
                    WebkitTextStrokeWidth : '2px' 
                        }} 
            
            >MultiSteps Form </span>
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
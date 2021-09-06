import {Button} from "react-bootstrap"
import { AccountComp } from "./AccountComp"

export const MultiStepsForm = () =>
{
    return <div className="row" >
        <div className="col-12 text-center p-5">
        <h1>MultiSteps Form </h1>
        </div>
       <div className="col-12 d-flex justify-content-center text-center" >
       <AccountComp />
       </div>
        <div className="col-12 text-center p-5">
        <Button>Back</Button> <Button>Next</Button>
        </div>
    </div>
}
import { Form } from "react-bootstrap"

export const AccountComp = () =>
{
    return <div className="ps-3 pe-3 w-50 shadow" >
        <Form.Group className="p-3" >
        <Form.Control type="number" placeholder="Account Number" />
        <Form.Text></Form.Text>
    </Form.Group>
    <div className="d-flex flex-direction-column justify-content-between p-3" >
        <Form.Group className="w-50 pe-3" >
            <Form.Control className="w-100" type="number" placeholder="Balance" />
            <Form.Text className="text-muted" ></Form.Text>
        </Form.Group>
        <Form.Group className="w-50 ps-3" >
            <Form.Control className="w-100" type="text" placeholder="Account Type" />
            <Form.Text className="text-muted" ></Form.Text>
        </Form.Group>
    </div>
    
    <Form.Group className="p-3">
        <Form.Control type="text" placeholder="Bank Name" />
        <Form.Text></Form.Text>
    </Form.Group>
</div>
}
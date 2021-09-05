import { Form } from "react-bootstrap"

export const UserComp = () => {
    return <div className="ps-3 pe-3 w-50 shadow" >
        <div className="d-flex flex-direction-column justify-content-between p-3" >
            <Form.Group className="w-50 pe-3" >
                <Form.Control className="w-100" type="text" placeholder="First Name" />
                <Form.Text className="text-muted" ></Form.Text>
            </Form.Group>
            <Form.Group className="w-50 ps-3" >
                <Form.Control className="w-100" type="text" placeholder="Last Name" />
                <Form.Text className="text-muted" ></Form.Text>
            </Form.Group>
        </div>
        <Form.Group className="p-3" >
            <Form.Control type="email" placeholder="Email" />
            <Form.Text></Form.Text>
        </Form.Group>
        <Form.Group className="p-3">
            <Form.Control type="password" placeholder="Password" />
            <Form.Text></Form.Text>
        </Form.Group>
        <Form.Group className="p-3">
            <Form.Control type="password" placeholder="Confirm Password" />
            <Form.Text></Form.Text>
        </Form.Group>
    </div>
}
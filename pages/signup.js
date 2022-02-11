import { Form,Row,Col,Button } from "react-bootstrap";

function signup() {
    return (
        <div className="container">
            <br/>
            <h2>Sign Up</h2>
            <br/>
            <Form>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="email" placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="Dark">submit</Button>

            </Form>
        </div>
    )
}
export default signup;
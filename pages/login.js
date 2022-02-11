import { Form ,Button} from "react-bootstrap";

function login() {
    return (
        <div className="container">
            <br/>
            <h2>Login</h2>
            <br/>
            <Form>
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
export default login;

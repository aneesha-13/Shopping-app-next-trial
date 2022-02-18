import { Form,Row,Col,Button } from "react-bootstrap";
import Link from "next/link";
import NextLink from "next/link";
import Cookies from 'js-cookie';
import axios from 'axios';
import { useRouter } from "next/router";
import { useContext } from "react";

function signup() {
    const router=useRouter();
    const{redirect}=router.query;
    // const {state, dispatch}=useContext(Store)
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
            <br/>
            <h6>Already have an account? &nbsp; <NextLink href='/login' passHref><Link>Login</Link></NextLink></h6> 

        </div>
    )
}
export default signup;
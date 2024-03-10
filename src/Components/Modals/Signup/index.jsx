import React, { useContext } from 'react'
import UserContext from '../../../context'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Row, Form, Button, Modal } from 'react-bootstrap'
function SignupModal() {
    const { showSignUpModal, setShowSignUpModal } = useContext(UserContext)
    const handleClose = () => {
        setShowSignUpModal(false)
    }
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: ""
        },
        validationSchema: Yup.object({
            firstName: Yup.string("").min(4).required("First Name is Required"),
            lastName: Yup.string("").min(4).required("Last Name is Required"),
            email: Yup.string("").email().min(4).required("Email is Required"),
            password: Yup.string("").min(4).required("Please Enter Pasword"),
            confirmPassword: Yup.string("").min(4).required("Please Confirm Password").oneOf([Yup.ref('password')], 'Passwords must match'),
        }),
        onSubmit: (values, { resetForm }) => {
            console.log(values);
            let users = localStorage.getItem('users');
            delete values.confirmPassword;
            if (users) {
                users = JSON.parse(users);
                if (Array.isArray(users)) {
                    localStorage.setItem('users', JSON.stringify([...users, values]))
                } else {
                    localStorage.setItem('users', JSON.stringify([values]))
                }
            }
            localStorage.setItem('users', JSON.stringify([values]))
            setShowSignUpModal(false)
            resetForm()
        }
    });
    return (
        <Modal show={showSignUpModal} onHide={handleClose}>
            <Modal.Header closeButton className='bg-light'>
                <Modal.Title className='mx-auto'>SIGN UP</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form className='container' onSubmit={formik.handleSubmit}>
                    <Form.Group as={Row} className="mb-3 me-1">
                        <Form.Label style={{ textAlign: "left" }}>
                            First Name
                        </Form.Label>
                        <Form.Control name={"firstName"} value={formik.values?.firstName} placeholder={`Enter Your First Name`} onChange={formik.handleChange} type={'text'} onBlur={formik.handleBlur} />
                        <Form.Text style={{ color: "red" }}>{formik.touched?.firstName && formik.errors?.firstName}</Form.Text>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3 me-1">
                        <Form.Label style={{ textAlign: "left" }}>
                            Last Name
                        </Form.Label>
                        <Form.Control name={"lastName"} value={formik.values?.lastName} placeholder={`Enter Your Last Name`} onChange={formik.handleChange} type={'text'} onBlur={formik.handleBlur} />
                        <Form.Text style={{ color: "red" }}>{formik.touched?.lastName && formik.errors?.lastName}</Form.Text>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3 me-1">
                        <Form.Label style={{ textAlign: "left" }}>
                            Email
                        </Form.Label>
                        <Form.Control autoComplete={'off'} name={"email"} value={formik.values?.email} placeholder={`Enter Your Email`} onChange={formik.handleChange} type={'email'} onBlur={formik.handleBlur} />
                        <Form.Text style={{ color: "red" }}>{formik.touched?.email && formik.errors?.email}</Form.Text>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3 me-1">
                        <Form.Label style={{ textAlign: "left" }}>
                            Password
                        </Form.Label>
                        <Form.Control name={"password"} autoComplete={'off'} placeholder={`Enter Your Password`} onChange={formik.handleChange} value={formik.values.password} type={'password'} onBlur={formik.handleBlur} />
                        <Form.Text style={{ color: "red" }}>{formik.touched?.password && formik.errors?.password}</Form.Text>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3 me-1">
                        <Form.Label style={{ textAlign: "left" }}>
                            Confirm Password
                        </Form.Label>
                        <Form.Control name={"confirmPassword"} placeholder={`Confirm Your Password`} onChange={formik.handleChange} value={formik.values.confirmPassword} type={'password'} onBlur={formik.handleBlur} />
                        <Form.Text style={{ color: "red" }}>{formik.touched?.confirmPassword && formik.errors?.confirmPassword}</Form.Text>
                    </Form.Group>
                    <Button type='submit' variant="primary">
                        Submit
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>)
}

export default SignupModal

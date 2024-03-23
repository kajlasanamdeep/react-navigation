import React, { useContext } from 'react'
import UserContext from '../../../context'
import { Button, Form, Modal, Row } from 'react-bootstrap'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
function LoginModal() {
    const navigate = useNavigate()
    const { showLoginModal, setShowLoginModal } = useContext(UserContext)
    const handleClose = () => {
        setShowLoginModal(false)
    }
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            email: Yup.string("").email().min(4).required("Email is Required"),
            password: Yup.string("").min(4).required("Please Enter Pasword"),
        }),
        onSubmit: (values) => {
            console.log(values);
            let users = localStorage.getItem('users');
            if (users) {
                users = JSON.parse(users);
                if (Array.isArray(users)) {
                    let user = users.find((item) => {
                        return item.email === values.email
                    });
                    console.log(user);
                    if (user && user.password === values.password) {
                        alert('Login succes !')
                        localStorage.setItem("user", JSON.stringify(user))
                        setShowLoginModal(false)
                        navigate('/profile', {
                            state: user
                        })
                        return
                    } else if (user) {
                        alert('Invalid Password !')
                        return
                    }
                }
            }
            alert('Please Signup your account before login !')
            setShowLoginModal(false)
        }
    });
    return (
        <Modal show={showLoginModal} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title className='mx-auto'>LOG IN</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form className='container' onSubmit={formik.handleSubmit}>
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
                    <Button type='submit' variant="primary">
                        Submit
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>)
}

export default LoginModal

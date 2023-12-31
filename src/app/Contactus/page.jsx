'use client'
import React from 'react'
import style from './page.module.css'
import { useFormik } from 'formik'
import * as  Yup from 'yup' 
import { Helmet } from 'react-helmet'
export default function page() {
    let validateSchema = Yup.object({
        name:Yup.string().min(5,'minimum 5 character').required('your name is required'),
        email:Yup.string().email('is invalid email').required( 'your email is required'),
        message:Yup.string().min(5,'minimum 5 character').required('your message is required'),
      })
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        validationSchema: validateSchema,

    })
    return <>
    <Helmet>
        <title>
            Contact us
        </title>
    </Helmet>
        <section id='contactUs' className='mt-5'>
            <div className="row container m-auto mb-2">
                <div className="col-md-5">
                    <h2 className={`${style.title} ms-3`} style={{fontWeight:'700'}}>Contact US</h2>
                    <div className={`${style.leftContent} mb-4`}>
                        <h3>Onechemic Egypt. </h3>
                        <p className='text-muted mt-3 mb-1' >
                            <i className=' fas fa-location-dot me-2'></i>
                            Alexandria agricultural Slow Road,<br />
                            Qalyoub
                            Qalyoubia,<br /> Egypt.
                        </p>
                    </div>
                    <div className={`${style.leftContent} mt-0 `}>
                        <p className='text-muted mb-4 ' >
                            <i className='fa fa-phone me-2'></i>
                            +20 10 22 64 1805
                        </p>
                        <i className='fas fa-envelope me-2 text-muted '></i>
                        <a href="mailto:info@onechemic.com" className='text-decoration-none text-muted '>
                            info@onechemic.com</a>
                    </div>
                </div>

                <div className='col-md-7'>
                    <div className={`${style.rightContent}`}>
                    <form  action="https://formspree.io/f/mrgngbgg" method="POST" target="_blank">
                        <label htmlFor="name" >First and last name</label>
                        <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name} 
                        className='form-control mb-2' type="text" name='name' id='name' 
                        placeholder='Please state your full name' />
                        {formik.errors.name && formik.touched.name ? 
                        <div className='alert alert-danger mt-2 p-2'>{formik.errors.name}</div> : ""}

                        <label htmlFor="email" >E-mail address</label>
                        <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} 
                        className='form-control mb-2' type="email" name='email' id='email'
                        placeholder='Please enter your e-mail address' />
                        {formik.errors.email && formik.touched.email ?
                        <div className='alert alert-danger mt-2 p-2'>{formik.errors.email}</div> : ""}

                        <label htmlFor="message" >Message</label>
                        <textarea onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.message} 
                        className='form-control mb-2' type="text" name='message' id='message'
                        placeholder='What question do you have?' ></textarea>
                        {formik.errors.message && formik.touched.message ? 
                        <div className='alert alert-danger mt-2 p-2'>{formik.errors.message}</div> : ""}

                            <div className=' border border-0 rounded text-light d-flex align-items-center '>
                                <button disabled={!(formik.isValid && formik.dirty)} type='submit'
                                onSubmit={formik.handleSubmit} 
                                className='btn btn-outline-primary mt-2 mx-2' style={{fontWeight:'600'}}> Send
                                    <i className="fas fa-paper-plane ms-2"></i>
                                 </button>
                            </div>

                          
                    </form>
                    </div>
                  
                </div>
            </div>

        </section>

    </>
}

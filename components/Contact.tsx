import React, { useState } from 'react'
import './Contact.css'
import { FaFacebookF, FaPinterestP } from "react-icons/fa";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import CustomButton from './CustomButton';
import Link from 'next/link';
import { useRef} from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const onSubmit = async (data: any) => {
    setFormSubmitted(true); // Indicate successful form submission

    try {
      const response = await fetch('https://formspree.io/f/xwkdbnav', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success('Message Sent!');
        console.log('Form submission successful!');
        // Optionally, display a success message to the user
        setFormSubmitted(false);
      } else {
        console.error('Form submission failed.');
        // Optionally, handle errors gracefully (e.g., display an error message)
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // Optionally, handle errors gracefully (e.g., display an error message)
    } finally {
      setFormSubmitted(false); // Reset form state after submission or error
    }
  };


  return (
    <div className='the'>
       <div className="container">
            <div className="forms-container">
                <div className="signin-signup">
                    <form onSubmit={handleSubmit(onSubmit)} className="sign-in-form">
                        <h2 className="title">Contact Us</h2>

                       
                        {/* <div className="input-container"> */}
                            <input
                            {...register('name', { required: true })}
                            className="input-field"
                            type="text"
                            placeholder="Name"
                            />
                            {errors.name && <span className="error">Name is required</span>}
                        {/* </div> */}

                        {/* <div className="input-container"> */}
                            <input
                            {...register('lastName', { required: true })}
                            className="input-field"
                            type="text"
                            placeholder="Last Name"
                            />
                            {errors.lastName && <span className="error">Last Name is required</span>}
                        {/* </div> */}

                        {/* <div className="input-container"> */}
                            <input
                            {...register('email', { required: true, pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ })}
                            className="input-field"
                            type="email"
                            placeholder="Email"
                            />
                            {errors.email && errors.email.type === 'required' && (
                            <span className="error">Email is required</span>
                            )}
                            {errors.email && errors.email.type === 'pattern' && (
                            <span className="error">Invalid email format</span>
                            )}
                        {/* </div> */}

                        <textarea
                            {...register('message', { required: true })}
                            name="message"
                            className="input-field"
                            rows={10}
                            placeholder="Message"
                        />
                        {errors.message && <span className="error">Message is required</span>}

                        <CustomButton
                            title={formSubmitted ? 'Sending...' : 'Send Message'}
                            containerStyles="bg-primary-blue text-white rounded-full left-[15px] mt-12 h-[50px] w-full tracking-[3px] hover:bg-blue-900"
                            rightIcon="/right-arrow.svg"
                            isDisabled={formSubmitted} // Disable button while submitting
                            handleClick={handleSubmit(onSubmit)} // Use handleSubmit for validation
                        />

                        <p className="social-text">Visit our other social platforms</p>

                        <div className="social-media">
                            <Link href="https://facebook.com/veeclothingcompany" className="social-icon">
                              <FaFacebookF />
                            </Link>

                            <Link href="http://x.com/Veeclothingcomp" className="social-icon">
                              <FaXTwitter />
                            </Link>

                            <Link href="https://instagram.com/veeclothingcompany" className="social-icon">
                              <FaInstagram />
                            </Link>

                            <Link href="https://www.pinterest.com/veeclothingcompany/" className="social-icon">
                              <FaPinterestP />
                            </Link>
                        </div>
                    </form>
                </div>
            </div>

            
        </div>
    </div>
  )
}

export default Contact

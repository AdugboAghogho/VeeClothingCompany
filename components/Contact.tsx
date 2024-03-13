import React from 'react'
import './Contact.css'
import { FaFacebookF, FaPinterestP } from "react-icons/fa";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { IoMdLock, IoMdMail } from "react-icons/io";
import CustomButton from './CustomButton';
import Link from 'next/link';

const Contact = () => {
  return (
    <div className='the'>
       <div className="container">
            <div className="forms-container">
                <div className="signin-signup">
                    <form action="#" className="sign-in-form">
                        <h2 className="title">Contact Us</h2>

                        <input className="input-field1" type="text" placeholder="Name" required/>

                        <input className="input-field1" type="text" placeholder="LastName" required/>
                        

                        <div className="input-field">
                            <IoMdMail className='icon' />
                            <input type="gmail" placeholder="Mail" required/>
                        </div>

                        
                        <textarea name='message' className="input-field" rows={10} placeholder="Message" required></textarea>
                        

                        <CustomButton 
                            title="Send Message"
                            containerStyles='bg-primary-blue text-white rounded-full left-[15px] mt-12  h-[50px] w-full tracking-[3px]  hover:bg-blue-900'
                            rightIcon='/right-arrow.svg'
                        />

                        <p className="social-text">Or Sign in with social platforms</p>

                        <div className="social-media">
                            <Link href="#" className="social-icon">
                              <FaFacebookF />
                            </Link>

                            <Link href="#" className="social-icon">
                              <FaXTwitter />
                            </Link>

                            <Link href="#" className="social-icon">
                              <FaInstagram />
                            </Link>

                            <Link href="#" className="social-icon">
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

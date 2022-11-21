import React from 'react'
import './contact.css'
import {HiOutlineMail} from'react-icons/hi'
import {BsMessenger} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_u4yc91y', 'template_kqj0pbg', form.current, 'VCveyTXpOkftgxkGW')
    
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
        e.target.reset();
    };

  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact me </h2>
      <div className='container contact__container'>
        <div className="contact__options">
          <article className='contact__option'>
            <HiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>troudi222@gmail.com</h5>
            <a href="mailto:troudi222@gmail.com">Send a message</a>
          </article>

          <article className='contact__option'>
            <BsMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Abderrahim Troudi</h5>
            <a href="https://m.me/profile.php?id=100006147826386">Send a message</a>
          </article>


          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>28473413</h5>
            <a href="https://api.whatsapp.com/send?phone=21628473413">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your full name' required/>
          <input type="email" name="email" placeholder='Your Email ' required/>
          <textarea name="message"  placeholder='Your message' rows="7"></textarea>
          <button type="submit" className='btn btn-primary perbtn'>Send a message</button>

        </form>
      </div>
    </section>
  )
}

export default Contact
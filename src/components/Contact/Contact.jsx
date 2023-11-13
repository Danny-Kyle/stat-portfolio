import "./contact.css"
import github from "../../assets/github_original_wordmark_logo_icon_146506.ico"
import leetcode from "../../assets/leetcode_logo_icon_145113.ico"
import twitter from "../../assets/twitter_x_new_logo_x_icon_256077.ico"
import linkedIn from "../../assets/in_linked_linkedin_media_social_icon_124259.ico"
import insta from "../../assets/instagram.png"
import stackoverflow from "../../assets/stackoverflow_icon-icons.com_62748.ico" 
import emailjs from '@emailjs/browser';
import { useRef } from "react"
import { useState } from "react"

const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        const serviceId = 'service_3tzvu26';
        const templateId = 'template_wctjivs';
        const publicKey  ='XqrYkLElz0Hu2BszI';
        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: 'Daniel',
            message: message
          }
    
        emailjs.send(serviceId, templateId, form.current, templateParams, publicKey)
          .then((result) => {
              console.log(result.text);
              alert('Email Sent')
              setName('')
              setMessage('')
              setEmail('')
          })
          .catch((error) => {
            console.error('Error sending mail', error);
        });
          
      };

      
    return (
        <section id="contactPage">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Please fill out the form below to discuss any collaboration ideas</span>
            <form className="contactForm" ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder="Your Name" value={name} onChange={(e)=> setName(e.target.value)}/>
                <input type="text" className="email" placeholder="Your Email Address" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                <textarea className="msg" value={message} rows="5" placeholder="Message....." onChange={(e)=> setMessage(e.target.value)}></textarea>
                <button type="submit" value='Send' className="submitBtn">Submit</button>
                <div className="links">
                   <a href="https://github.com/Danny-Kyle/"><img src={github} alt="github" className="link" /></a> 
                   <a href="https://leetcode.com/Danny-Kyle/"><img src={leetcode} alt="leetcode" className="link" /></a>
                   <a href="https://twitter.com/d_kyle616"><img src={twitter} alt="twitter" className="link" /></a>
                   <a href="https://www.linkedin.com/in/okechukwu-daniel-633b43184/"><img src={linkedIn} alt="linkedIn" className="link" /></a>
                   <a href="https://instagram.com/danny_kyle_/"><img src={insta} alt="insta" className="link"/></a>
                   <a href="https://stackoverflow.com/users/16650312/danny-kyle"> <img src={stackoverflow} alt="stackoverflow" className="link" /></a>
                </div>
            </form>
        </section>
    )
}

export default Contact
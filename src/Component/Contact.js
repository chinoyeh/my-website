import React,{ useState } from 'react';
import { send } from 'emailjs-com';
import './css/Contact.css'

const Contact = () => {
  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: '',
    message: '',
    reply_to: '',
  });


  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_bef9tj9',
      'template_t3ktf1i',
      toSend,
       "5su0JbqvtIs7_iDRr",
    )
      .then((response) => {
      alert('Message Sent')
      setToSend({
        from_name: '',
        to_name: '',
        message: '',
        reply_to: '',
      })
      })
      .catch((err) => {
        alert('Message Failed to Send')
      });
  };
  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <React.Fragment>
      
    <div className="container-fluid py-5" id="contact">
        <div className="container">
            <div className="position-relative d-flex align-items-center justify-content-center">
                <h1 className="display-1 text-uppercase text-white" >Contact</h1>
                <h1 className="position-absolute text-uppercase text-primary">Contact Me</h1>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="contact-form text-center">
                        <div id="success"></div>
                        <form name="sentMessage" id="contactForm" novalidate="novalidate" onSubmit={onSubmit}>
                           
                                <div className="control-group ">
                                    <input type="text" className="form-control p-4" id="name" placeholder="Your Name" name='from_name'  value={toSend.from_name}
                                        required="required" data-validation-required-message="Please enter your name"  onChange={handleChange}/>
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="control-group">
                                    <input type="email" className="form-control p-4" id="email" placeholder="Your Email"
                                        required="required" data-validation-required-message="Please enter your email"  name='reply_to' value={toSend.reply_to}  onChange={handleChange} />
                                    <p className="help-block text-danger"></p>
                                </div>
                          
                          
                            <div className="control-group">
                                <textarea className="form-control py-3 px-4" rows="5" id="message" placeholder="Message"
                                    required="required"
                                    data-validation-required-message="Please enter your message"  onChange={handleChange}  name='message' value={toSend.message}></textarea>
                                <p className="help-block text-danger"></p>
                            </div>
                            <div>
                                <button className="btn btn-outline-primary" type="submit" id="sendMessageButton" onClick={onSubmit} style={{width:'30%'}} disabled={toSend.from_name===''||toSend.reply_to===''||toSend.message===''}>Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
   {/* <section className='contact'>
       <h1>Contact Me</h1>
       <div>
          
<form onSubmit={onSubmit}>
               <input type='text'   name='from_name' placeholder='Enter your Name' value={toSend.from_name}
    onChange={handleChange} />
               <input type='text' placeholder='Enter your Email '    name='reply_to' value={toSend.reply_to}
    onChange={handleChange} />
               <textarea placeholder='Enter your Message'   name='message' value={toSend.message}
    onChange={handleChange}/>
     <button type='submit' onClick={onSubmit}>Send</button>
           </form>
       </div>
   </section> */}
    </React.Fragment>
  )
}

export default Contact
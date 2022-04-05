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
   <section className='contact'>
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
   </section>
    </React.Fragment>
  )
}

export default Contact
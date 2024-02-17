
import React, { useState } from 'react';




function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [subject, setSubject] = useState('');
  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    setName('');
    setEmail('');
    setMessage('');
    setPhoneNumber('');
    setSubject('');
  };
  return (
    <div id="contact_id">
      <h1
        style={{
          color: "blue",
          marginLeft: "41%",
          marginTop: 300,
          marginBottom: 150,
        }}
      >
        Let's Connect
        
      </h1>
      
      <form onSubmit={handleSubmit}>
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
        <div className='formsubmission'>
        <div>
          <label htmlFor="name">Name :</label>
          <input
             className='inputfeild1'
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email :</label>
          <input
          className='inputfeild1'
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone :</label>
          <input

          className='inputfeild1'
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            pattern="[0-9]*" 
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        </div>
        <div style={{marginLeft:"50px",marginRight:"40px",marginTop:"15px"}}>
          <label htmlFor="subject">Subject :</label>
          <br />
          <textarea
             className='inputfeild2'
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          ></textarea>
        </div>
        <div style={{marginLeft:"50px",marginRight:"40px",marginTop:"15px"}}>
          <label htmlFor="message">Message :</label>
          <br />
          <textarea
          className='inputfeild2'
            
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
       
        </div>
        <button className='formButton' type="submit">Submit</button>
      </form>
      
        

      
    </div>
  );
}

export default Contact;

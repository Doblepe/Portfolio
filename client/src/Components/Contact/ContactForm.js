import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const FormStyle = styled.form`
  width: 100%;
  .form-group {
    width: 100%;
    margin-bottom: 2rem;
  }
  label {
    font-size: 1.8rem;
  }
  input,
  textarea {
    width: 100%;
    font-size: 2rem;
    padding: 1.2rem;
    color: var(--gray-1);
    background-color: var(--deep-dark);
    outline: none;
    border: none;
    border-radius: 8px;
    margin-top: 1rem;
  }
  textarea {
    min-height: 250px;
    resize: vertical;
  }
  button[type='submit'] {
    background-color: var(--gray-1);
    color: var(--black);
    font-size: 2rem;
    display: inline-block;
    outline: none;
    border: none;
    padding: 1rem 4rem;
    border-radius: 8px;
    cursor: pointer;
  }
`;

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

   function submitEmail(e){
    e.preventDefault();
    axios({
      method: "POST", 
      url:"/send", 
      data:  this.state
    }).then((response)=>{
      if (response.data.status === 'success'){
          alert("Message Sent."); 
          this.resetForm()
      }else if(response.data.status === 'fail'){
          alert("Message failed to send.")
      }
    })
    resetForm()
}
function resetForm(){
  this.setState({name: '', email: '', message: ''})
}

 /*  -----------------SENDING INFO CLASSIC WAY ------------------ 
 function sendInfo(){
    fetch( 'http://localhost:5000/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: name,
            email: email,
            message: message,
        }),
    })
        .then((res) => res.json())
        .then(data => console.log(data));
      } */
  return (
    <>
      <form>
        <div className="form-group" id="contact-form">
          <label htmlFor="name">
            Your Name
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="email">
            Your Email
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="message">
            Your message
            <textarea
              type="text"
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
        </div>
        <button type="submit" onClick={()=>{submitEmail()}}>Send</button>
      </form>
    </>
  );
  }
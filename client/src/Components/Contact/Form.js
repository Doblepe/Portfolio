import React from 'react'
import { useState } from 'react';
/* import sending from '../../assets/images/sending.gif'
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import BusinessIcon from '@material-ui/icons/Business';
import SubjectIcon from '@material-ui/icons/Subject'; */
import axios from 'axios'
import './form.css'
import styled from 'styled-components';

const FormStyle = styled.div`
form{
  width: 100%;
}
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
 
  color: var(--black);
  font-size: 2rem;
  display: inline-block;
  outline: none;
  border: none;
  padding: 1rem 4rem;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 3rem;
}
`;


function Form() {

  const [email, setEmail] = useState('vicdobleperez@gmail.com')
  const [message, setMessage] = useState('')
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')


  function resetForm() {
    setEmail('');
    setMessage('');
    setName('');
    setCompany('');
  }
  const handleRequest = async (e) => {

    if (email && company && name !== "") {
      if (message !== "") {
        e.preventDefault()
        const body = {
          email,
          message,
          name,
          company
        }
        await axios.post('https://morning-woodland-47559.herokuapp.com/mail', body, {
          headers: {
            'Content-type': 'application/json'
          }
        }).then((res) => {
          alert('Email Sent Successfully. I will text you back as soon as posible')
          console.log(res)
          resetForm()
        }).catch((err) => {
          console.log(err)
        })
      } else {
        alert('Compose Email')
      }
    } else {
      alert('Please fill all required filled')
    }
    //fetch method

    // const response = await fetch("/mail", {
    //   method: 'POST',
    //   headers: {
    //     'Content-type': 'application/json'
    //   },

    //   body: JSON.stringify({
    //     email,
    //     message,
    //     subject,
    //     name,
    //     company
    //   })
    // })

    // const data = await response.json()
    // if(data.status === 'success'){
    //   alert('Message Sent.')
    //   this.resetForm()
    // }
    // else if(data.status === 'fail'){
    //   alert('Message failed to send')
    // }
  }
  return (
    <FormStyle>
      <form onSubmit={handleRequest} method="post">
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
              type="text"
              id="company"
              name="company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
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
        <div>
          <button
            onClick={handleRequest} type="submit" >Send</button>
        </div>
      </form>
    </FormStyle>
  )
}
export default Form



//// --------------------------- Old Form ---------------------------------
{/* <form onSubmit={handleRequest} method="post">
      <div className="form">
        <div className="form__wrapper">
          <div className="form__title">
            <h4>{loading ? 'Sending...' : "Send Email"}</h4>
            {
              loading && <img
                src={sending}
                alt="loading..."
                style={{
                  filter: "invert(1)",
                  position: "absolute",
                  width: 200,
                  height: 200,
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)"
                }}
              />
            }
          </div>
          <div className="form__container">
            <div className="form__containerItems">
              <div className="form__containerItem">
                <div className="form__containerItemName">
                  <label>Name</label>
                  <PersonIcon />
                </div>
                <div className="form__containerItemField">
                  <input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required={true}
                    type="text"
                    placeholder="Enter Your Name"
                  />
                </div>
              </div>
           <div className="form__containerItem">
                <div className="form__containerItemName">
                  <label>Email</label>
                  <EmailIcon />
                </div>
                <div className="form__containerItemField">
                  <input
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required={true}
                    type="text"
                    placeholder="Enter Your valid Email"
                  />
                </div>
              </div> 
              <div className="form__containerItem">
                <div className="form__containerItemName">
                  <label>Company</label>
                  <BusinessIcon />
                </div>
                <div className="form__containerItemField">
                  <input
                    id="company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    type="text"
                    placeholder="Enter Your Company Name"
                  />
                </div>
              </div>
              <div className="form__containerItem">
                <div className="form__containerItemName">
                  <label>Subject</label>
                  <SubjectIcon />
                </div>
                <div className="form__containerItemField">
                  <input
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                    type="text"
                    placeholder="Add Subject"
                  />
                </div>
              </div>
              <div className="form__containerItem">
                <div className="form__containerItemName">
                  <label>Message</label>
                  <SubjectIcon />
                </div>
                <div className="form__containerItemFieldMessage">
                  <textarea
                    id="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    type="text"
                    placeholder="Add your message and a way to contact back"
                  />
                </div>
              </div>

            {/*   <div className="form__containerItem">
                <div className="label">
                  <label>Compose Mail</label>
                </div>
                <div className="container__composeMail">
                  <ReactQuill
                    id="message"
                    value={message}
                    onChange={handleQuillChange}
                    className="quill"
                    placeholder="Enter Content from here..."
                  />
                </div>
              </div>
              <div>
                  <button
                    disabled={loading}
                    onClick={handleRequest} type="submit" >Send</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </form> */}
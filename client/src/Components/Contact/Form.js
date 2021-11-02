import React from 'react'
import { useState } from 'react';
import styled from 'styled-components';
import sending from '../../assets/images/sending.gif'
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import BusinessIcon from '@material-ui/icons/Business';
import SubjectIcon from '@material-ui/icons/Subject';
import axios from 'axios'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 

function Form() {
    const FormStyles = styled.div`
    padding: 10rem 0;
    .form{
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 20px;
/* border: 2px solid #f74b42; */
box-shadow: 8px 8px 8px -4px #040a0098;
}

.form__wrapper{
display: flex;
align-items: center;
padding: 50px;
background-color: black;
flex-direction: column;
border-radius: 5px;
width: 700px;
}

.form__title{
display: flex;
color: aqua;
}

.form__title > h4{
font-size: 2rem;
font-weight: 400;
border-bottom: 2px solid #f74b42;
}

.form__container{
display: flex;
align-items: center;
margin-top: 10px;
flex-direction: column;
}

.form__containerItems{
display: flex;
flex-direction: column;
margin-top: 10px;
}

.form__containerItem{
display: flex;
flex-direction: column;
margin-top: 10px;
}

.form__containerItemName{
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
}

.form__containerItemName > label{
font-size: 1.5rem;
color: white;
font-weight: 400;
}

.form__containerItemName > .MuiSvgIcon-root{
color: #f74b42;
font-size: xx-large;
}

.form__containerItemField{
display: flex;
width: 100%;
}

.form__containerItemField > input{
outline: none;
border: none;
padding: 10px;
border-radius: 5px;
margin-top: 5px;
background-color: transparent;
color: white;
width: 100%;
}

.form__containerItemField > input:focus{
border: 1px solid aqua;
border-radius: 5px;
}

.container__composeMail{
display: flex;
color: white;
}`
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [name, setName] = useState('')
    const [subject, setSubject] = useState('')
    const [company, setCompany] = useState('')
    const [loading, setLoading] = useState(false)

    const handleQuillChange = (value) => {
        setMessage(value)
    }

    const handleRequest = async (e) => {
        if (email && company && name && subject !== "") {
            if (message !== "") {
                e.preventDefault()
                setLoading(true)
                console.log({ email, message, name, subject, company })

                const body = {
                    email,
                    message,
                    subject,
                    name,
                    company
                }
                await axios.post('/mail', body, {
                    headers: {
                        'Content-type': 'application/json'
                    }
                }).then((res) => {
                    alert('Email Sent Successfully')
                    setLoading(false)
                    console.log(res)
                    window.location.reload()
                }).catch((err) => {
                    console.log(err)
                    setLoading(false)
                })
            } else {
                alert('Compose Email')
            }

        } else {
            alert('Please fill all required filled')
        }


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
        <FormStyles>
            <form onSubmit={handleRequest} method="post">
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
                                        <label>Compose Mail</label>
                                        <button
                                            disabled={loading}
                                            onClick={handleRequest} type="submit" className="btn btn-success">Send</button>
                                    </div></div>
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

                        </div>

                    </div>

                </div>
            </form>
        </FormStyles>
    )
}

export default Form

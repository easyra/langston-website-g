import React, { useState } from "react"
import Layout from "../components/Layout"
import Head from "../components/Head"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const ContactPage = () => {
  const { email } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          email
        }
      }
    }
  `).site.siteMetadata
  const [input, setInput] = useState({
    name: "",
    reply_to: "",
    subject: "",
    message: "",
  })
  const handleInput = e => {
    const { value, name } = e.target
    setInput({ ...input, [name]: value })
  }
  const { name, reply_to, subject, message } = input
  return (
    <Layout>
      <Head title="Contact" />
      <TextWrapper>
        <p>EMAIL ME HERE</p>
        <a href={`mailto:${email}`}>{email}</a>
      </TextWrapper>
      <StyledForm method="POST" action={`https://formspree.io/${email}`}>
        <input
          type="email"
          name="reply_to"
          placeholder="Your email"
          onChange={handleInput}
          value={reply_to}
        />
        <input
          type="subject"
          name="subject"
          placeholder="Subject Ex: I'd like to buy a painting"
          onChange={handleInput}
          value={subject}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={message}
          onChange={handleInput}
        ></textarea>
        <button type="submit">Send Message</button>
      </StyledForm>
    </Layout>
  )
}

const TextWrapper = styled.div`
  text-align: center;
  margin: 15px 0;
  p {
    font-size: 24px;
    font-weight: bold;
  }
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  padding: 15px;

  input {
    width: 100%;
    margin: 15px 0;
    font-family: "Roboto", sans-serif;
    font-size: 16px;
  }
  textarea {
    width: 100%;
    margin: 15px 0;
    min-height: 150px;
    font-family: "Roboto", sans-serif;
    font-size: 16px;
  }
  button {
    padding: 8px;
    font-size: 16px;
  }
`

export default ContactPage

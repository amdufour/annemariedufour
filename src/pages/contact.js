import React from 'react'
import Layout from '../components/Layout'
import ContactForm from '../components/ContactForm'
import SocialLinks from '../components/SocialLinks'

const Contact = () => {
  return <Layout styleClass="contact-page">
    <div className="contact-page">
      <div className="contact-header">
        <div className="logo-bg"></div>
        <div className="container">
          <h1>Contact me</h1>
        </div>
        <div className="header-bottom-triangles"></div>
      </div>
      <div className="page-content">
        <div className="container">
          <div className="contact-info">
            <section className="contact-form-section">
              <h2>Ready to discuss your next project?</h2>
              <div className="contact-form">
                <ContactForm />
              </div>
            </section>
            <section className="contact-connect-section">
              <h2>Let’s connect!</h2>
              <div className="contact-connect">
                <SocialLinks />
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </Layout>
}

export default Contact
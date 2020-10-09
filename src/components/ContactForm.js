import React from 'react'

const formKey = "f18299cc-edd7-4bc7-9a6e-62e601fe13cc"

class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nameValue: '',
      emailValue: '',
      subjectValue: '',
      nameIsActive: false,
      emailIsActive: false,
      subjectIsActive: false,
      messageIsActive: false,
      submitIsDisabled: true
    }

    this.updateActiveState = this.updateActiveState.bind(this)
    this.testFormEnable = this.testFormEnable.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
  }

  updateActiveState(name, value, active) {
    switch (name) {
      case 'name':
        this.setState({ nameIsActive: active, nameValue: value }, this.testFormEnable);
        break;
      case 'email':
        this.setState({ emailIsActive: active, emailValue: value }, this.testFormEnable);
        break;
      case 'subject':
        this.setState({ subjectIsActive: active, subjectValue: value }, this.testFormEnable);
        break;
      case 'message':
        this.setState({ messageIsActive: active }, this.testFormEnable);
        break;
      default:
        break;
    }
  }

  testFormEnable() {
    const isDisabled = (this.state.nameValue !== '' && this.state.emailValue !== '' && this.state.subjectValue !== '') ? false : true;
    this.setState({ submitIsDisabled: isDisabled })
  }

  handleChange(event) {
    this.updateActiveState(event.target.name, event.target.value, true);
  }

  handleBlur(event) {
    const fieldHasContent = event.target.value !== '' ? true : false;
    this.updateActiveState(event.target.name, event.target.value, fieldHasContent);
  }

  render() {
    return (
      <form action={`https://getform.io/f/${formKey}`} method="POST">
        <div className={`form-item form-item-input ${this.state.nameIsActive ? 'active' : ''}`}>
          <label htmlFor="form-name">Name</label>
          <input type="text" id="form-name" name="name" required
                 onChange={this.handleChange} onFocus={this.handleChange} onBlur={this.handleBlur} />
        </div>
        <div className={`form-item form-item-input ${this.state.emailIsActive ? 'active' : ''}`}>
          <label htmlFor="form-email">Email Address</label>
          <input type="email" id="form-email" name="email" required
                 onChange={this.handleChange} onFocus={this.handleChange} onBlur={this.handleBlur} />
        </div>
        <div className={`form-item form-item-input ${this.state.subjectIsActive ? 'active' : ''}`}>
          <label htmlFor="form-subject">Subject</label>
          <input type="text" id="form-subject" name="subject" required
                 onChange={this.handleChange} onFocus={this.handleChange} onBlur={this.handleBlur} />
        </div>
        <div className={`form-item form-item-text ${this.state.messageIsActive ? 'active' : ''}`}>
          <label htmlFor="form-message">Message <span className="optional">- Optional</span></label>
          <textarea type="text" id="form-message" name="message"
                    onChange={this.handleChange} onFocus={this.handleChange} onBlur={this.handleBlur}
                    placeholder="I'd love to know more about the type of project that you have in mind!" />
        </div>
        <button className="btn btn-teal" type="submit"
                disabled={this.state.submitIsDisabled}>
          Send message
        </button>
      </form>
    )
  }
}
export default ContactForm
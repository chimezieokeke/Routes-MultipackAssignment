import React, { createRef }  from 'react';

class BasicForm extends React.Component {
  constructor(props) {
    super(props);
    this.nameRef = createRef();
    this.emailRef = createRef();
    this.phoneRef = createRef();
  }

  state = {
    names: [],
    emails: [],
    phoneNumbers: [],
    nameError: '',
    emailError: '',
    phoneError: ''
  };

  handleNameChange = (evt) => {
    const name = evt.target.value.trim();
    const names = name.split(' ');
  
    if (names.length < 2) {
      this.setState({ nameError: 'Please enter at least first name and last name' });
    } else {
      this.setState({ nameError: '' });
    }
  };
  
  handleEmailChange = (evt) => {
    const email = evt.target.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    this.setState({ 
      emailError: emailRegex.test(email) ? '' : 'Please enter valid email' 
    });
  };

  handlePhoneChange = (evt) => {
    const phone = evt.target.value.trim();
    const phoneRegex = /^\d{10}$/;
    this.setState({ 
      phoneError: phoneRegex.test(phone) ? '' : 'Please enter valid phone number' 
    });
  };

  onFormSubmit = (evt) => {
    evt.preventDefault();

    const name = this.nameRef.current.value.trim();
    const email = this.emailRef.current.value.trim();
    const phone = this.phoneRef.current.value.trim();

    // Validation
    if (!name || !email || !phone) {
      alert('Please fill out all fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      alert('Please enter a valid 10-digit phone number.');
      return;
    }

    const names = [...this.state.names, name];
    const emails = [...this.state.emails, email];
    const phoneNumbers = [...this.state.phoneNumbers, phone];

    this.setState({
      names: names,
      emails: emails,
      phoneNumbers: phoneNumbers,
      nameError: '',
      emailError: '',
      phoneError: ''
    });

    // Clear input fields after submission
    this.nameRef.current.value = '';
    this.emailRef.current.value = '';
    this.phoneRef.current.value = '';
  };

  render() {
    return (
      <div>
        <h1>Sign Up Sheet</h1>

        <form onSubmit={this.onFormSubmit}>
          <input
            placeholder='Name'
            ref={this.nameRef}
            onChange={this.handleNameChange}
          />
          <span>{this.state.nameError}</span>

          <input
            placeholder='Email'
            ref={this.emailRef}
            onChange={this.handleEmailChange}
          />
          <span>{this.state.emailError}</span>

          <input
            placeholder='Phone Number'
            ref={this.phoneRef}
            onChange={this.handlePhoneChange}
          />
          <span>{this.state.phoneError}</span>

          <input type='submit' />
        </form>

        <div>
          <h3>Entries</h3>
          <ul>
            {this.state.names.map((name, i) => (
              <li key={i}>
                Name:{name} |
                Email:{this.state.emails[i]} |
                Phone: {this.state.phoneNumbers[i]}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default BasicForm;

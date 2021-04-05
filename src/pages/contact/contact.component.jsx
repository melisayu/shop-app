
import React, {useState} from 'react';
import CustomButton from '../../components/custom-button/custom-button.component'; 
import FormInput from '../../components/form-input/form-input.component';

import { ContactContainer } from './contact.styles';


function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleOnChange = (event, label) => {
    const { value } = event.target
    if (label === 'name') {
      setName(value);
    } else if (label === 'email') {
      setEmail(value);
    } else {
      setMessage(value);
    }
  }

  return (
    <ContactContainer>
            <h1>Contact Us</h1>
      <form>
        <FormInput
          label='Name'
          type='text'
          value={name}
          onChange={(e) => handleOnChange(e, 'name')}
          required
        />
        <FormInput
          label='Email'
          type='email'
          value={email}
          onChange={(e) => handleOnChange(e, 'email')}
          required
        />
        <FormInput
          label='Message'
          type='text'
          value={message}
          onChange={(e) => handleOnChange(e, 'message')}
          required
        />
        <CustomButton type='submit'>Submit</CustomButton>
      </form>
    </ContactContainer>
  )
}

export default Contact;

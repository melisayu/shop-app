import React from 'react';

import { MessageContainer, Message } from './message.styles';


const CustomMessage = ({ text }) => (
  <MessageContainer>
    <Message>{text}</Message>
  </MessageContainer>
);


export default CustomMessage;

import styled, { keyframes } from 'styled-components';

const fadeInAnimation = keyframes`
  0%,100% { opacity: 0; }
  50% { opacity: 1; }
`;

export const MessageContainer = styled.div`
  position: fixed;
  width: 100%;
  top: 25px;
  left: 0;
  z-index: 1;
  opacity: .9;
  animation: ${fadeInAnimation} 2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
`;

export const Message = styled.p`
  font-size: 16px;
  color: #3c763d;
  width: 80%;
  background-color: #dff0d8;
  margin: auto;
  border-radius: 6px;
  padding: 20px;
`;

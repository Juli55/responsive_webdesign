import React from 'react';
import { StyledButton } from './style';

export const Button = ({ children, ...props }) => (
  <StyledButton {...props}>{children}</StyledButton>
);

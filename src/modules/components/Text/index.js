import React from 'react';
import { StyledTitle } from './style';

export const Title = ({ type, children }) => (
  <StyledTitle type={type}>{children}</StyledTitle>
);

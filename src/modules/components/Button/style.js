import styled from 'styled-components';

export const StyledButton = styled.button`
  // background: radial-gradient(circle, rgba(96,172,91,1) 0%, rgba(128,208,139,1) 0%, rgba(163,247,236,1) 100%);
  // background: red;
  background: linear-gradient(16deg, rgba(163,247,191,1) 0%, rgba(163,234,247,1) 100%);
  border: 1px solid linear-gradient(16deg, rgba(163,247,191,1) 0%, rgba(163,234,247,1) 100%);
  border: none;
  cursor: pointer;
  border-radius: 48px;
  color: #757575;
  font-weight: 900;
  padding: 1.2rem 2rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1rem;
  box-shadow: 0 3px 6px rgba(100, 100, 100, 0.1), 0 3px 6px rgba(100, 100, 100, 0.1);
  width: 256px;
  transition: .4s;  
  & :hover {
    box-shadow: 0 -1px -2px rgba(100, 100, 100, 0.2), 0 -1px -2px rgba(100, 100, 100, 0.2);
    opacity: 0.8;
    // border: 1px solid black;
  }
`;

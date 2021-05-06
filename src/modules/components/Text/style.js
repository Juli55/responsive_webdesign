import styled from 'styled-components';

export const StyledTitle = styled.div`
  font-size: 2.5rem;
  font-style: ${(props) => props.type ?? 'italic'};
  margin: 2rem;
`;

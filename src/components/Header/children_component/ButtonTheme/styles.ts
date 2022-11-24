import styled from 'styled-components';

export const ComponentButton = styled.button`
  background: ${props => props.theme.colors.quaternary};
  color: ${props => props.theme.colors.primary};
  border: none;
`;
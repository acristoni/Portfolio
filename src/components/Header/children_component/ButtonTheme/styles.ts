import styled from 'styled-components';

export const ComponentButton = styled.button`
  background: ${props => props.theme.colors.mainBg};
  color: ${props => props.theme.colors.text};
  border: none;
`;
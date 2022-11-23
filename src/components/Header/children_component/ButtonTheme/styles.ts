import styled from 'styled-components';

export const ComponentButton = styled.button`
  background: ${props => props.theme.colors.sectionBg};
  color: ${props => props.theme.colors.text};
  border: none;
`;
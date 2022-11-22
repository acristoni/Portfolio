import styled from 'styled-components';

export const Container = styled.div`
  margin-left: 42%;
`;

export const ComponentButton = styled.button`
  width: 300px;
  height: 100px;
  font-size: 30px;
  background: ${props => props.theme.colors.sectionBg};
  color: ${props => props.theme.colors.text};
  border: 5px solid ${props => props.theme.colors.markText};
  border-radius: 5px;
`;
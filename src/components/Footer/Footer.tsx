import React from 'react';
import { contact } from '../../types/contact.type';
import Contacts from './children_components/Contacts/Contacts';
import NameFooter from './children_components/NameFooter/NameFooter';
import { Container, LeftContent, RightContent, FooterMessage } from './styles';

type Props = {
  message: string,
  contacts: contact[],
  widthPage: number
}

function Footer({message, contacts, widthPage}: Props) {
  return (
    <Container data-testid="footer" id="contacts">
      <LeftContent>
        <NameFooter/>
        <FooterMessage>{message}</FooterMessage>
      </LeftContent>
      <RightContent>
        <Contacts contacts={contacts}/>
      </RightContent>
    </Container>
  );
}

export default Footer;
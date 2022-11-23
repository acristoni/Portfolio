import React from 'react';
import { contact } from '../../types/contact.type';
import Contacts from './children_components/Contacts/Contacts/Contacts';
import NameFooter from './children_components/Contacts/NameFooter/NameFooter';
import { Container, LeftContent, RightContent, FooterMessage } from './styles';

type Props = {
  message: string,
  contacts: contact[]
}

function Footer({message, contacts}: Props) {
  return (
    <Container data-testid="footer">
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
import React from 'react';
import { contact } from '../../types/contact.type';
import Contacts from './children_components/Contacts/Contacts';
import NameFooter from './children_components/NameFooter/NameFooter';
import { Container, LeftContent, RightContent, FooterMessage } from './styles';

type Props = {
  message: string,
  contacts: contact[],
  mobileSize: number
}

function Footer({message, contacts, mobileSize}: Props) {
  return (
    <Container 
      data-testid="footer" 
      id="contacts"
      mobileSize={mobileSize}
    >
      <LeftContent mobileSize={mobileSize}>
        <NameFooter mobileSize={mobileSize}/>
        <FooterMessage>{message}</FooterMessage>
      </LeftContent>
      <RightContent mobileSize={mobileSize}>
        <Contacts contacts={contacts} mobileSize={mobileSize}/>
      </RightContent>
    </Container>
  );
}

export default Footer;
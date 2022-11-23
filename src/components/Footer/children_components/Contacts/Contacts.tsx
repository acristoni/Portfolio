import React from 'react';
import { contact } from '../../../../types/contact.type';
import { Icon } from '../../../Icon/Icon';
import { Container, Title, ContactsSection, Contact, Link } from './styles';

type Props = {
  contacts: contact[]
}

function Contacts({ contacts }: Props) {
  return (
    <Container>
      <Title>Contacts</Title>
      <ContactsSection>
        {
          contacts.map(contactInfo => {
            return (
              <Contact key={contactInfo.title}>
                <Icon iconName={contactInfo.icon} />
                <Link href={contactInfo.href}>{contactInfo.title}</Link>
              </Contact> 
            )
          })
        }
      </ContactsSection>
    </Container>
  );
}

export default Contacts;
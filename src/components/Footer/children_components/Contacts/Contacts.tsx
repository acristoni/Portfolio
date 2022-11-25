import React from 'react';
import { contact } from '../../../../types/contact.type';
import { Icon } from '../../../Icon/Icon';
import { Container, Title, ContactsSection, Contact, Link, IconBox } from './styles';

type Props = {
  contacts: contact[]
}

function Contacts({ contacts }: Props) {
  return (
    <Container data-testid="contacts">
      <Title>Contacts</Title>
      <ContactsSection>
        {
          contacts?.map(contactInfo => {
            return (
              <Contact key={contactInfo.title}>
                <IconBox>
                  <Icon iconName={contactInfo.icon} />
                </IconBox>
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
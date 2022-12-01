import React from 'react';
import { contact } from '../../../../types/contact.type';
import { Icon } from '../../../Icon/Icon';
import { Container, 
         Title, 
         ContactsSection, 
         Contact, 
         Link, 
         IconBox } from './styles';

type Props = {
  contacts: contact[],
  mobileSize: number
}

function Contacts({ contacts, mobileSize }: Props) {
  return (
    <Container data-testid="contacts" mobileSize={mobileSize}>
      <Title mobileSize={mobileSize}>Contacts</Title>
      <ContactsSection mobileSize={mobileSize}>
        {
          contacts?.map(contactInfo => {
            return (
              <Contact key={contactInfo.title}>
                <IconBox mobileSize={mobileSize}>
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
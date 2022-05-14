import { Section, Title } from 'module/Utils';
import { ContactBook, ContactForm } from 'module/Contact/component';

const Contact = () => (
  <div className="container">
    <Section type="Phonebook">
      <Title title="Phonebook" />
      <ContactForm />
    </Section>
    <Section>
      <Title title="Contacts" />
      <ContactBook />
    </Section>
  </div>
);

export default Contact;

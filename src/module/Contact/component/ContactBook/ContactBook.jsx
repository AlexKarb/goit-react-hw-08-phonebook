import { ContactsList } from 'module/Contact/component';
import { Spiner, NoFound } from 'module/Utils';
import { useGetAllContactQuery } from 'redux/contacts/contactsQuery';

export const ContactBook = () => {
  const { data: allContacts = [], isLoading } = useGetAllContactQuery();

  const haveContact = allContacts.length > 0 && !isLoading;
  const noFoundContact = allContacts.length === 0 && !isLoading;

  return (
    <>
      {noFoundContact && <NoFound text={'No contacts'} />}
      {isLoading && <Spiner />}
      {haveContact && <ContactsList />}
    </>
  );
};

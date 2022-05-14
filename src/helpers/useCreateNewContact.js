import {
  useGetAllContactQuery,
  useSaveNewContactMutation,
} from 'redux/contacts/contactsQuery';
import { finderName, normalizeContact } from 'module/Contact/helpers';
import { notify } from 'helpers/notify';

export const useCreateNewContact = () => {
  const { data: allContacts = [] } = useGetAllContactQuery();

  const [onSave] = useSaveNewContactMutation();

  const createContact = async contact => {
    try {
      const checkedContact = await finderName(
        allContacts,
        normalizeContact(contact)
      );

      onSave(checkedContact);
      notify({ text: `🦄 create new contact ${contact.name}`, type: 'create' });
    } catch (error) {
      notify({ text: `${contact.name} is already in contacts`, type: 'error' });
    }
  };

  return { createContact };
};

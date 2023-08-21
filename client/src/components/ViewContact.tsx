import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { fetchContacts } from '../api';

const ViewContact: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const { data: contacts } = useQuery('contacts', fetchContacts);

  const contact = contacts.find((c:any) => c.id === Number(id));

  if (!contact) {
    return <div>Contact not found.</div>;
  }

  return (
    <div>
      <h2>Contact Details</h2>
      <p>Name: {contact.name}</p>
      <p>Email: {contact.email}</p>
    </div>
  );
};

export default ViewContact;

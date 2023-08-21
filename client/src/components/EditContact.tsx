
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQueryClient, useMutation, useQuery} from 'react-query';
import { fetchContacts, editContact } from '../api';

const EditContact: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  
  // State for form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // Fetch contacts data
  const { data: contacts } = useQuery('contacts', fetchContacts);
  const contact = contacts.find((c:any) => c.id === Number(id));

  // Mutation for editing contact
  const mutation = useMutation(editContact, {
    onSuccess: () => {
      queryClient.invalidateQueries('contacts');
      navigate('/contacts');
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate({ id: contact.id, name, email });
  };

  if (!contact) {
    return <div>Contact not found.</div>;
  }

  return (
    <div>
      <h2>Edit Contact</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button type="submit" disabled={mutation.isLoading}>
          Save
        </button>
      </form>
    </div>
  );
};

export default EditContact;

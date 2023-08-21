
import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { addContact } from '../api'; 
import { Contact } from '../types';
import { useNavigate } from 'react-router-dom';

const AddContact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const mutation = useMutation(addContact, {
    onSuccess: () => {
      queryClient.invalidateQueries('contacts');
      navigate('/contacts');
    },
  });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     mutation.mutate({ name, email });
//     setName('');
//     setEmail('');
//   };

const handleSubmit = (e: React.FormEvent) => {
    const newContact: Contact = {
      id: 0, // ID might be assigned by the server
      name,
      email,
    };
    e.preventDefault();
    mutation.mutate(newContact);
  };

  return (
    <div>
      <h2>Add Contact</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button type="submit" disabled={mutation.isLoading}>
          Add Contact
        </button>
      </form>
    </div>
  );
};

export default AddContact;


import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useQueryClient, useMutation } from 'react-query';
import { fetchContacts, deleteContact } from '../api';

type Contact = {
    id: number;
    name: string;
    email: string;
    // Other properties
  };

const DeleteContact: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const contacts = queryClient.getQueryData('contacts') as Contact[]; 

  const mutation = useMutation(deleteContact, {
    onSuccess: () => {
      queryClient.invalidateQueries('contacts');
      navigate('/contacts');
    },
  });

  const handleDelete = () => {
    mutation.mutate(Number(id));
  };

  return (
    <div>
      <h2>Delete Contact</h2>
      <p>Are you sure you want to delete this contact?</p>
      <button onClick={handleDelete} disabled={mutation.isLoading}>
        Delete
      </button>
    </div>
  );
};

export default DeleteContact;

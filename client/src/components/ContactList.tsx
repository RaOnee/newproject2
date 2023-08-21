
import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { fetchContacts } from '../api'; 
import { Colors } from 'chart.js';

const ContactList: React.FC = () => {
  const { data: contacts, isLoading, isError } = useQuery('contacts', fetchContacts);

  if (isLoading) {
    return <div>Loading contacts...</div>;
  }

  if (isError) {
    return <div>Error loading contacts.</div>;
  }

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '5px 10px',
    borderRadius: '5px',
    marginRight: '5px',
    cursor: 'pointer',
    Colors: 'white',
  };

  return (
    <div style={{ backgroundImage: 'url("https://as1.ftcdn.net/v2/jpg/05/43/75/26/1000_F_543752626_TBNCskzJ28f7UfTtVD6yPsVbPfdzuC5W.jpg")', backgroundColor: 'white', padding: '0px 100px 10px 10px', borderRadius: '5px', marginBottom: '100px', marginLeft: '10px', marginRight: '10px', marginTop: '1opx', boxShadow: '10px 10px 10px 10px rgba(0, 0, 0, 0.2)' }}>
      <h2>Contact List</h2>
      <ul>
        {contacts.map((contact:any) => (
          <li key={contact.id}>
                <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{contact.name}</h2>
                <p style={{ color: '#777', marginBottom: '5px' }}>{contact.email}</p>
         <div style={{ marginTop: '10px' }}>
            <button style={{ ...buttonStyle, backgroundColor: '#007bff', textDecoration:'none' }}><Link to={`/contacts/${contact.id}`} style={{textDecoration:'none',color: 'white' }}>View Details</Link></button>
            <button style={{ ...buttonStyle, backgroundColor: '#28a745', textDecoration:'none' }}><Link to={`/contacts/${contact.id}/edit`} style={{textDecoration:'none',color: 'white' }}>Edit</Link></button>
            <button style={{ ...buttonStyle, backgroundColor: '#dc3545', textDecoration:'none' }}><Link to={`/contacts/${contact.id}/delete`} style={{textDecoration:'none',color: 'white' }}>Delete</Link></button>
        </div>
          </li>
        ))}
      </ul>
      <button style={{ ...buttonStyle, backgroundColor: '#28a745' ,paddingTop:'1px', paddingBottom:'0.2x' }}><Link to="/contacts/add" style={{textDecoration:'none',color: 'white', paddingBottom:'1px', marginTop:'100px'}}><h1 style={{ fontSize: '1rem', marginBottom: '20px' }}>Create Contact</h1></Link></button>
    </div>
  );
};

export default ContactList;

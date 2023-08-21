import axios from 'axios';
import { Contact } from './types';

const BASE_URL = 'https://disease.sh/v3/covid-19';
const BASE_URL2 = 'http://localhost:5000';

export async function fetchWorldwideData() {
  const response = await fetch(`${BASE_URL}/all`);
  return response.json();
}

export async function fetchCountryData() {
  const response = await fetch(`${BASE_URL}/countries`);
  return response.json();
}

export async function fetchGraphData() {
  const response = await fetch(`${BASE_URL}/historical/all?lastdays=all`);
  return response.json();
}


export const fetchContacts = async () => {
  const response = await axios.get(`${BASE_URL2}/api/contacts`);
  return response.data;
};

export const addContact = async (newContact: Contact) => {
  const response = await axios.post(`${BASE_URL2}/api/contacts`, newContact);
  return response.data;
};


export const editContact = async (editedContact:Contact) => {
  const response = await axios.put(`${BASE_URL2}/api/contacts/${editedContact.id}`, editedContact);
  return response.data;
};

export const deleteContact = async (contactId:number) => {
  const response = await axios.delete(`${BASE_URL2}/api/contacts/${contactId}`);
  return response.data;
};

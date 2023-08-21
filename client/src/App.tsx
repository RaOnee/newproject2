import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import ViewContact from './components/ViewContact';
import EditContact from './components/EditContact';
import LineGraph from './components/LineGraph';
import Map from './components/Map';
import DeleteContact from './components/DeleteContact';
import Navbar from './components/Navbar';


const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/contacts" element={<ContactList />} />
        <Route path="/contacts/add" element={<AddContact />} />
        <Route path="/contacts/:id" element={<ViewContact />} />
        <Route path="/contacts/:id/edit" element={<EditContact />} />
        <Route path="/contacts/:id/delete" element={<DeleteContact />} />
        <Route path="/charts-map" element={<Map />} />
      </Routes>
    </div>
  );
};

export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddSlave from './components/AddSlave';
import SlavesList from './components/SlavesList';
import SlaveDetail from './components/SlaveDetail';

const App = () => {
  return (
        <Router>
      <Routes>
        <Route path="/slaves" element={<SlavesList />} />
        <Route path="/slave/:id" element={<SlaveDetail />} />
        <Route path="/add-slave" element={<AddSlave />} />
      </Routes>
    </Router>
  );
};

export default App;

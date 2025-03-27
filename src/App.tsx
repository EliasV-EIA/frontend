import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddSlave from './components/AddSlave';
import SlavesList from './components/SlavesList';
import SlaveDetail from './components/SlaveDetail';
import Welcome from './components/Welcome';
import DictatorsList from './components/DictatorsList';


const App = () => {
  return (
    
        <Router>
      <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path="/slaves" element={<SlavesList />} />
        <Route path="/slave/:id" element={<SlaveDetail />} />
        <Route path="/add-slave" element={<AddSlave />} />
        <Route path='/dictators' element={<DictatorsList/>}/>
      </Routes>
    </Router>
  );
};

export default App;

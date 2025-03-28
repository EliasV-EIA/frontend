import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddSlave from './components/AddSlave';
import SlavesList from './components/SlavesList';
import SlaveDetail from './components/SlaveDetail';
import Welcome from './components/Welcome';
import DictatorsList from './components/DictatorsList';
import EditSlave from './components/EditSlave';
import AddDictator from './components/AddDictator';
import DictatorDetail from './components/DictatorDetail';
import EditDictator from './components/EditDictator';
import SponsorsList from './components/SponsorsList';
import SponsorDetail from './components/SponsorDetail';
import AddSponsor from './components/AddSponsor';
import EditSponsor from './components/EditSponsor';


const App = () => {
  return (
    
        <Router>
      <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path="/slaves" element={<SlavesList />} />
        <Route path="/slave/:id" element={<SlaveDetail />} />
        <Route path='/slave/:id/edit' element={<EditSlave />} />
        <Route path="/add-slave" element={<AddSlave />} />
        <Route path='/dictators' element={<DictatorsList/>}/>
        <Route path="/add-dictator" element={<AddDictator/>}/>
        <Route path="/dictator/:id" element={<DictatorDetail />} />
        <Route path="/dictator/:id/edit" element={<EditDictator/>}/>
        <Route path='/sponsors' element={<SponsorsList/>}/>
        <Route path="/sponsor/:id" element={<SponsorDetail />} />
        <Route path="/add-sponsor" element={<AddSponsor/>} />
        <Route path='/sponsor/:id/edit' element={<EditSponsor />} />


      </Routes>
    </Router>
  );
};

export default App;

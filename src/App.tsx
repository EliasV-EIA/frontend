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
import BattlesList from './components/BattlesList';
import EditBattle from './components/EditBattle';
import BattleDetail from './components/BattleDetail';
import AddBattle from './components/AddBattle';
import BlackmarketsList from './components/BlackmarketList';
import AddBlackmarket from './components/AddBlackmarket';
import BlackmarketDetail from './components/BlackmarketDetail';
import EditBlackmarket from './components/EditBlackmarket';


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
        <Route path="/battles" element={<BattlesList/>}/>
        <Route path='/battle/:id/edit' element={<EditBattle />} />
        <Route path='/battle/:id' element={<BattleDetail />} />
        <Route path="/add-battle" element={<AddBattle/>}/>
        <Route path="/blackmarkets" element={<BlackmarketsList/>}/>
        <Route path="/add-blackmarket" element={<AddBlackmarket/>}/>
        <Route path='/blackmarket/:id' element={<BlackmarketDetail/>}/>
        <Route path='/blackmarket/:id/edit' element={<EditBlackmarket/>}/>

      </Routes>
    </Router>
  );
};

export default App;

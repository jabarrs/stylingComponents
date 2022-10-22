import { Foot, Footer } from './components/Foot';
import { Navbar } from './components/Navbar';
import './App.css';

import { Profile } from './components/Profile';
import { Skill } from './components/Skill';
import { History } from './components/History';
import { Contact } from './components/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <Profile />
      <Skill />
      <History />
      <Contact />
      <Foot />
    </div>
  );
}

export default App;

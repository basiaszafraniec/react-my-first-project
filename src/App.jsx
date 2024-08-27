import { useState, useEffect } from 'react';
import './App.css';
import User from './components/User';

const VaporwaveBackground = () => {
  useEffect(() => {
    const floor = document.querySelector('.floor');

    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      floor.style.backgroundPosition = `0 ${scrollPosition * 0.5}px, 0 0, 0 0`;
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <div className="floor"></div>;
};

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    const response = await fetch(
      "https://raw.githubusercontent.com/cederdorff/race/master/data/users.json"
    );
    const data = await response.json();
    setUsers(data);
  }

  return (
    <div className='pretty-much-body'>
      <VaporwaveBackground />
      <h1>Best React App in the World</h1>
      <div className="app">
        <section className="grid">
          {users.map((user) => (
            <User key={user.id} name={user.name} mail={user.mail} image={user.image} />
          ))}
        </section>
      </div>
    </div>
  );
}

export default App;

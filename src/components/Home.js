import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div style={styles.container}>
    <h1>Hey Liezel,</h1>
    <p>I've made something special for you. Click below to see why.</p>
    <Link to="/about" style={styles.button}>Click Here</Link>
  </div>
);

const styles = {
  container: { textAlign: 'center', padding: '50px' },
  button: { textDecoration: 'none', color: '#fff', backgroundColor: '#ff69b4', padding: '10px 20px', borderRadius: '5px' }
};

export default Home;

import React from 'react';

const Question = () => (
  <div style={styles.container}>
    <h1>Liezel, will you be my girlfriend?</h1>
    <button style={styles.button} onClick={() => alert('Yay! I’m so happy!')}>Yes</button>
    <button style={styles.button} onClick={() => alert('Oh no! But I respect your decision.')}>No</button>
  </div>
);

const styles = {
  container: { textAlign: 'center', padding: '50px' },
  button: { textDecoration: 'none', color: '#fff', backgroundColor: '#ff69b4', padding: '10px 20px', borderRadius: '5px', margin: '10px' }
};

export default Question;


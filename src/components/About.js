import React from 'react';

const About = () => (
  <div style={styles.container}>
    <h1>Our Journey</h1>
    <div style={styles.photo}><img src="photo1.jpg" alt="Photo of us" style={styles.img} /></div>
    <div style={styles.story}>
      <p>Remember when we first met? [Short anecdote]</p>
    </div>
    <div style={styles.photo}><img src="photo2.jpg" alt="Another photo" style={styles.img} /></div>
    <div style={styles.story}>
      <p>And this was one of our best moments... [Short anecdote]</p>
    </div>
  </div>
);

const styles = {
  container: { padding: '50px' },
  photo: { textAlign: 'center' },
  img: { width: '50%', borderRadius: '10px' },
  story: { margin: '20px 0' }
};

export default About;

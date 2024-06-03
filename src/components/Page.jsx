import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { FaHeartbeat, FaPhoneAlt, FaStethoscope } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import videoFile from '../assets/video.mp4';
import { auth } from '../firebaseConfig';

const Page = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toggleModal(); // Close modal on successful login
      navigate('/landing'); // Navigate to the Landing page
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={styles.homepage}>
      <header style={styles.header}>
        <div style={styles.logo}>
          <FaHeartbeat size={32} color="green" />
        </div>
        <nav style={styles.nav}>
          <ul style={styles.navList}>
            <li style={styles.navItem}><a href="#home" style={styles.navLink}>Home</a></li>
            <li style={styles.navItem}><a href="#services" style={styles.navLink}>Services</a></li>
            <li style={styles.navItem}><a href="#about" style={styles.navLink}>About Us</a></li>
            <li style={styles.navItem}><a href="#contact" style={styles.navLink}>Contact</a></li>
          </ul>
        </nav>
        <button style={styles.loginButton} onClick={toggleModal}>Login</button>
      </header>
      <div style={styles.videoWrapper}>
        <video autoPlay loop muted style={styles.videoBackground}>
          <source src={videoFile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <main style={styles.mainContent}>
        <section id="home" style={styles.section}>
          <div style={styles.textOverlay}>
            <h2>Bienvenue dans notre service de santé</h2>
            <p>Fournir des solutions de santé de premier ordre pour votre bien-être.</p>
          </div>
        </section>
        <section id="services" style={styles.section}>
          <div style={styles.textOverlay}>
            <h2>Services</h2>
            <div style={styles.services}>
              <div style={styles.service}>
                <FaStethoscope size={48} color="#28A745" />
                <h3 style={styles.serviceTitle}>Dashboard</h3>
                <p>Indice de Vulnérabilité Sanitaire</p>
              </div>
              <div style={styles.service}>
                <FaHeartbeat size={48} color="#28A745" />
                <h3 style={styles.serviceTitle}>Alert</h3>
                <p>Plusieurs Indicateurs sur l'alerte Sanitaire.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="about" style={styles.section}>
          <div style={styles.textOverlay}>
            <h2>About Us</h2>
            <p>Notre plateforme offre des KPI importants pour les   professionnels de la santé, engagée à fournir les meilleurs services médicaux.</p>
          </div>
        </section>
        <section id="contact" style={styles.section}>
          <div style={styles.textOverlay}>
            <h2>Contact Us</h2>
            <p><FaPhoneAlt /> +123 456 7890</p>
            <p>Email: contact@healthcare.com</p>
          </div>
        </section>
      </main>
      <footer style={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Healthcare. All rights reserved.</p>
      </footer>
      {isModalOpen && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalContent}>
            <h2>Login</h2>
            <form style={styles.form} onSubmit={handleLogin}>
              <div style={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  style={styles.input}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div style={styles.formGroup}>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  style={styles.input}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {error && <p style={styles.error}>{error}</p>}
              <button type="submit" style={styles.submitButton}>Login</button>
            </form>
            <button style={styles.closeButton} onClick={toggleModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  homepage: {
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
    color: '#fff',
    textAlign: 'center',
    position: 'relative',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#007BFF',
    color: '#fff',
    padding: '1rem 2rem',
    zIndex: '10',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
  },
  logoText: {
    marginLeft: '0.5rem',
  },
  nav: {
    display: 'flex',
    flex: '1',
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
  },
  navItem: {
    marginLeft: '1.5rem',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
  },
  loginButton: {
    backgroundColor: '#28A745',
    color: '#fff',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  videoWrapper: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    zIndex: '-1',
  },
  videoBackground: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  mainContent: {
    flex: '1',
    position: 'relative',
    zIndex: '1',
    padding: '100px 1rem 2rem 1rem',
  },
  textOverlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: '1rem',
    borderRadius: '8px',
    display: 'inline-block',
  },
  services: {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    flexWrap: 'wrap',
  },
  service: {
    backgroundColor: '#fff',
    padding: '1rem',
    borderRadius: '8px',
    textAlign: 'center',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    width: '300px',
    color: '#333',
  },
  serviceTitle: {
    marginTop: '1rem',
  },
  section: {
    padding: '2rem 0',
  },
  footer: {
    textAlign: 'center',
    padding: '0.5rem',
    backgroundColor: '#007BFF',
    color: '#fff',
    position: 'absolute',
    bottom: '0',
    width: '100%',
  },
  modalOverlay: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '100',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    width: '90%',
    maxWidth: '400px',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '1rem',
  },
  input: {
    width: '100%',
    padding: '0.5rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  submitButton: {
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  closeButton: {
    backgroundColor: '#ccc',
    color: '#333',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '1rem',
  },
  error: {
    color: 'red',
    marginBottom: '1rem',
  },
};

export default Page;

import React from 'react';
import { FaHeartbeat, FaPhoneAlt, FaStethoscope } from 'react-icons/fa';
import videoFile from '../assets/video.mp4'; // Import the video file

const Page = () => {
  return (
    <div style={styles.homepage}>
      <header style={styles.header}>
        <div style={styles.logo}>
          <FaHeartbeat size={32} color="#007BFF" />
          <h1 style={styles.logoText}>Healthcare</h1>
        </div>
        <nav style={styles.nav}>
          <ul style={styles.navList}>
            <li style={styles.navItem}><a href="#home" style={styles.navLink}>Home</a></li>
            <li style={styles.navItem}><a href="#services" style={styles.navLink}>Services</a></li>
            <li style={styles.navItem}><a href="#about" style={styles.navLink}>About Us</a></li>
            <li style={styles.navItem}><a href="#contact" style={styles.navLink}>Contact</a></li>
          </ul>
        </nav>
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
            <h2>Welcome to Our Healthcare Service</h2>
            <p>Providing top-notch healthcare solutions for your well-being.</p>
          </div>
        </section>
        <section id="services" style={styles.section}>
          <div style={styles.textOverlay}>
            <h2>Our Services</h2>
            <div style={styles.services}>
              <div style={styles.service}>
                <FaStethoscope size={48} color="#28A745" />
                <h3 style={styles.serviceTitle}>General Checkup</h3>
                <p>Regular health exams can help find problems before they start.</p>
              </div>
              <div style={styles.service}>
                <FaHeartbeat size={48} color="#28A745" />
                <h3 style={styles.serviceTitle}>Cardiology</h3>
                <p>Expert cardiology services to keep your heart healthy.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="about" style={styles.section}>
          <div style={styles.textOverlay}>
            <h2>About Us</h2>
            <p>We are a dedicated team of healthcare professionals committed to providing the best medical care.</p>
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
    </div>
  );
};

const styles = {
  homepage: {
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
    color: '#fff', // Set the text color to white
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background for text
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
    color: '#333', // Ensure text color inside services is dark for readability
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
};

export default Page;

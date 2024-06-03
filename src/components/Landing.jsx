

import { signOut } from "firebase/auth";
import React from 'react';
import { FaBell, FaHeartbeat, FaTachometerAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebaseConfig';
const Landing = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/page'); // Redirect to the login page after logout
    } catch (err) {
      console.error("Error logging out:", err);
    }
  };

  const handleNavigate = (path) => {
    navigate(path);
  };

  const styles = {
    landingContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontFamily: 'Arial, sans-serif',
      height: '100vh',
    },
    landingHeader: {
      width: '100%',
      backgroundColor: '#007BFF',
      color: 'white',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    navbar: {
      display: 'flex',
      alignItems: 'center',
    },
    logo: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
    },
    logoutButton: {
      backgroundColor: '#28A745',
      color: 'white',
      border: 'none',
      padding: '0.5rem 1rem',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    optionsWrapper: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    },
    optionsContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '2rem',
    },
    optionCard: {
      backgroundColor: 'white',
      padding: '1rem',
      borderRadius: '8px',
      textAlign: 'center',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      width: '200px',
      transition: 'transform 0.2s',
      cursor: 'pointer',
    },
    optionIcon: {
      fontSize: '4rem',
      color: '#28A745',
    },
    optionText: {
      marginTop: '1rem',
      fontSize: '1.25rem',
      color: '#333',
    },
  };

  return (
    <div style={styles.landingContainer}>
      <header style={styles.landingHeader}>
      <div style={styles.logo}>
          <FaHeartbeat size={32} color="green" />
        </div>
        <button style={styles.logoutButton} onClick={handleLogout}>Logout</button>
      </header>
      <div style={styles.optionsWrapper}>
        <div style={styles.optionsContainer}>
          <div
            style={styles.optionCard}
            onClick={() => handleNavigate('/alert')}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <FaBell style={styles.optionIcon} />
            <p style={styles.optionText}>Alert</p>
          </div>
          <div
            style={styles.optionCard}
            onClick={() => handleNavigate('/app')}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <FaTachometerAlt style={styles.optionIcon} />
            <p style={styles.optionText}>Dashboard</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;



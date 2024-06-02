import { useEffect, useState } from 'react';
import { auth } from './firebaseConfig'; // Adjust the import path as needed

export const useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return { user };
};

import React, { useEffect, useState } from 'react';
import { supabase } from './services/supabase';
import './App.css';

function App() {
  const [connectionStatus, setConnectionStatus] = useState('Testing connection...');

  useEffect(() => {
    const testConnection = async () => {
      try {
        const { error } = await supabase.from('users').select('count');
        if (error) throw error;
        setConnectionStatus('✅ Connected to Supabase successfully!');
      } catch (error) {
        setConnectionStatus('❌ Connection failed: ' + error.message);
      }
    };

    testConnection();
  }, []);

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">
          Productivity App
        </h1>
        <p className="status">
          {connectionStatus}
        </p>
      </div>
    </div>
  );
}

export default App;
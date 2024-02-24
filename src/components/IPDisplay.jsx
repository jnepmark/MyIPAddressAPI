import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';

function IPDisplay() {
  const [ipAddress, setIpAddress] = useState('');

  useEffect(() => {
    async function fetchIpAddress() {
      try {
        const response = await fetch('https://geo.ipify.org/api/v2/country?apiKey=at_JrPvmcfXz7tyl04ycZncNzv9ticmV');
        const data = await response.json();
        setIpAddress(data.ip);
      } catch (error) {
        console.error('Error fetching IP address:', error);
      }
    }

    fetchIpAddress();
  }, []);

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Your IP Address is: {ipAddress}
      </Typography>
    </div>
  );
}

export default IPDisplay;
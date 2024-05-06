import React from 'react';
import { QRCode } from 'qrcode.react';

const LocationQRCode = ({ latitude, longitude }) => {
  if (!latitude || !longitude) {
    return <p>Invalid coordinates provided.</p>;
  }

  // Google Maps URL with directions
  const mapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Scan this QR code for Google Maps directions:</h2>
      <QRCode value={mapsUrl} size={256} />
      <p>
        Coordinates: {latitude.toFixed(6)}, {longitude.toFixed(6)}
      </p>
    </div>
  );
};

export default LocationQRCode;

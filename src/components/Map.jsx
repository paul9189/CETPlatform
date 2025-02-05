// src/components/GoogleMap.jsx
import React from 'react';

function GoogleMap() {
  return (
    <div className="google-map-container" style={{ margin: '2rem 0' }}>
      <iframe
        title="Project Location Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2945.5187395321177!2d25.51913267594406!3d42.41669207118769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a8411672dfcf0f%3A0x9e712bab87fbdd76!2sYoutopia%20Riverside!5e0!3m2!1sen!2sro!4v1738714846048!5m2!1sen!2sro"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default GoogleMap;

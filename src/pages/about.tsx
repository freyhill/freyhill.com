import React from 'react';
import Layout from '@theme/Layout';

export default function About() {
  return (
    <Layout title="About Us">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        <p>Welcome to the About page of our website!</p>
      </div>
    </Layout>
  );
}

// src/App.tsx

import React from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import Contact from './components/Contact'; // Update the path based on your folder structure
import { useRouter } from 'next/navigation'; // Make sure to use this for app directory


const App: React.FC = () => {
  return (
    <GoogleReCaptchaProvider reCaptchaKey="6LfBYCgqAAAAAGQUzYjeWBbJowGj_ilU76W1M_br">
      <Contact />
    </GoogleReCaptchaProvider>
  );
};

export default App;


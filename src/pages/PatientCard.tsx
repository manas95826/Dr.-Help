import React from 'react';
import { Link } from 'react-router-dom';
import PatientCard from './PatientCard';

const Patient: React.FC = () => {
  const handlePrediction = () => {
    console.log('Predicting for this patient...');
    // Redirect to localhost:5000
    window.location.href = 'http://localhost:8501';
  };

  const buttonStyles: React.CSSProperties = {
    backgroundColor: '#4CAF50',
    border: 'none',
    color: 'white',
    padding: '15px 32px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    margin: '4px 2px',
    cursor: 'pointer',
    borderRadius: '8px',
    transition: 'background-color 0.3s',
    animation: 'pulse 1.5s infinite',
  };

  return (
    <div className='flex flex-1 justify-center items-center gap-48'>
      <div>
        <img src="/assets/defaultpfp.jpg" alt="" height={300} width={300} className='rounded-3xl'/>
      </div>
      <Link to="/" className='absolute top-3/4 left-64 border border-black p-2 rounded-xl'>Go back</Link>
      <PatientCard first="lorem" second="insanity" third="could've been better" fourth="lmao"/>

      {/* Animated button for predicting */}
      <button style={buttonStyles} onClick={handlePrediction}>
        Predict for this patient
      </button>
    </div>
  );
};

export default Patient;

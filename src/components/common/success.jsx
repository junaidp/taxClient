import React from 'react';

const Success = () => {
  return (
    <div className="success-container">
      <div className="success-box">
        <div className="icon">&#10004;</div>
        <h1>Payment Successful!</h1>
        <p>Thank you for your purchase. Your payment has been processed successfully.</p>
        <button className='buton' onClick={() => window.location.href = '/'}>Go to Homepage</button>
      </div>
    </div>
  );
};

export default Success;

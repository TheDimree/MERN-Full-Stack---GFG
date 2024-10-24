import React from 'react';

const ErrorHandler = ({ error }) => {
  return (
    <div role="alert">
      <p>An error occurred:</p>
      <p>{error.message}</p>
    </div>
  );
};

export default ErrorHandler;
import React from 'react';

const Second = ({ capital }) => {
  return (
    <div>
      {/* This will cause an error if 'capital' is undefined */}
      <p> Hello, visit {capital.xyz}</p>
    </div>
  );
};

export default Second;
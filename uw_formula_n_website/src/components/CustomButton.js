import React, { Component } from 'react';

// Define a custom button component
const CustomButton = ({ text, onClick, style }) => {
    return (
      <button onClick={onClick} style={{ padding: '10px 20px', borderRadius: '5px', ...style }}>
        {text}
      </button>
    );
  };

  export default CustomButton;

import React from 'react';

export default function Toast({ message, type }) {
  if (!message) return null;

  let typeClass = '';
  if (type === 'success') typeClass = 'toast-success';
  else if (type === 'error') typeClass = 'toast-error';
  else if (type === 'info') typeClass = 'toast-info';

  return (
    <div className={`toast ${typeClass}`}>
      {message}
    </div>
  );
}

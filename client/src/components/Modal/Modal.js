import React from 'react';
import './Modal.css';

export default function Modal({
  active, setActive, children, modelFlag,
}) {
  return (
    <div
      className={active ? 'modal active' : 'modal'}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? `modal-content active ${modelFlag && 'big'}` : 'modal-content'}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>

  );
}

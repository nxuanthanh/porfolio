import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

function TooltipContent({ coords }) {
  console.log(coords);
  if (typeof document === 'undefined') return;
  return ReactDOM.createPortal(
    <p
      style={{
        padding: '4px 7px',
        color: 'white',
        borderRadius: '8px',
        position: 'absolute',
        display: 'block',
        top: coords.top - coords.height / 2 + window.scrollY,
        left: coords.left,
        transition: 'all',
        height: '36px',
        opacity: 1,
        background: 'linear-gradient(45deg, #f64f59, #c471ed, #12c2e9)',
      }}
    >
      _Thanks for your view and hope to connect with you...
    </p>,
    document.querySelector('body')
  );
}

TooltipContent.propTypes = {};

export default TooltipContent;

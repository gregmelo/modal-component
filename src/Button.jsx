// src/Button.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

/**
 * A customizable button component with gradient styling.
 * @component
 * @param {Object} props - The component props
 * @param {string} props.text - The text to display on the button
 * @param {Function} [props.onClick] - Function to call when the button is clicked
 * @param {string} [props.className] - Additional CSS classes for styling
 * @param {string} [props.type] - The button type (e.g., 'button', 'submit')
 * @returns {JSX.Element} The button component
 * @example
 * ```jsx
 * <Button text="Click Me" onClick={() => console.log('Clicked')} />
 * ```
 */

const Button = ({ text, onClick, className = '' }) => {
  return (
    <button
      className={`button ${className}`} // Combine la classe de base "button" avec les classes supplémentaires
      onClick={onClick}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  /** The text to display on the button */
  text: PropTypes.string.isRequired,
  /** Function to call when the button is clicked */
  onClick: PropTypes.func,
  /** Additional CSS classes for styling */
  className: PropTypes.string,
  /** The button type (e.g., 'button', 'submit') */
  type: PropTypes.string
};

Button.defaultProps = {
  onClick: null,
  className: '',
  type: 'button'
};

export default Button;
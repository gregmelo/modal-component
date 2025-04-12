// src/Modal.jsx
import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import './Modal.scss';

/**
 * A reusable modal component for displaying messages or alerts in a React application.
 * The modal can display success or error messages and includes a customizable close button.
 * @component
 * @param {Object} props - The component props
 * @param {boolean} props.isOpen - Determines whether the modal is visible
 * @param {Function} props.onClose - Function to call when the modal is closed
 * @param {string} props.message - The message to display in the modal
 * @param {boolean} [props.isError=false] - Indicates if the message is an error message
 * @returns {JSX.Element|null} The modal component or null if not open
 * @example
 * ```jsx
 * <Modal
 *   isOpen={true}
 *   onClose={() => console.log('Modal closed')}
 *   message="Operation completed successfully!"
 *   isError={false}
 * />
 * ```
 */


const Modal = ({ isOpen, onClose, message, isError = false }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p className={`modal-message ${isError ? 'error' : 'success'}`}>
          {message}
        </p>
        <Button text={isError ? 'OK' : 'Close'} onClick={onClose} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  /** Determines whether the modal is visible */
  isOpen: PropTypes.bool.isRequired,
  /** Function to call when the modal is closed */
  onClose: PropTypes.func.isRequired,
  /** The message to display in the modal */
  message: PropTypes.string.isRequired,
  /** Indicates if the message is an error message */
  isError: PropTypes.bool
};

Modal.defaultProps = {
  isError: false
};

export default Modal;
# @gregmelo/modal-component

A reusable React modal component for displaying success or error messages with customizable styling and a gradient button.

## Installation

Install the package via npm:

```bash
npm install @gregmelo/modal-component
```
## Dependencies

This component requires the following peer dependencies:

    react: ^17.0.0 || ^18.0.0
    react-dom: ^17.0.0 || ^18.0.0

It also depends on:

    react-icons: ^5.0.0

## Usage

Import and use the Modal component in your React application:

```bash
import React, { useState } from 'react';
import { Modal } from '@gregmelo/modal-component';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        message="Operation completed successfully!"
        isError={false}
      />
    </div>
  );
};

export default App;
```

## Props
 
Prop	Type	Required	Default	Description
isOpen	boolean	Yes	-	Determines whether the modal is visible
onClose	function	Yes	-	Function to call when the modal is closed
message	string	Yes	-	The message to display in the modal
isError	boolean	No	false	Indicates if the message is an error (displays in red instead of green)

## Styling

The modal uses SCSS for styling, with a semi-transparent overlay, a white content box, and a gradient button. The message color changes based on isError:

    Success: Green (#3e4720)
    Error: Red (#a83232)

To customize styles, you can override the following classes:

    .modal-overlay
    .modal-content
    .modal-message
    .modal-message.success
    .modal-message.error

## License

MIT

## Repository

[GitHub Repository](https://github.com/gregmelo/modal-component)

## Issues

Report issues or contribute at [GitHub Issues](https://github.com/gregmelo/modal-component/issues)
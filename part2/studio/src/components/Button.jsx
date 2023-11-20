// components/Button.jsx
import React from 'react';
import SaveButton from './SaveButton';
import ClickedButton from './ClickedButton';

function Button(props) {
  const saveButton = props.saveButton;

  return (
    <div>
      {saveButton ? <SaveButton /> : <ClickedButton />}
    </div>
  );
}

export default Button;

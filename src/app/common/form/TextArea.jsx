import React from 'react';
import { Form, Label } from 'semantic-ui-react'

const TextArea = ({input, rows, type, placeholder, meta: {touched, error}}) => {
  // console.log(input)
  return (
    <Form.Field error={touched && !!error}>
    <textarea {...input} placeholder={placeholder} rows={rows}></textarea>
      {touched && error &&<Label basic colr='red'>{error}</Label>}
    </Form.Field>
  );
};

export default TextArea;
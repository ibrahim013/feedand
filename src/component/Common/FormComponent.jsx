import React from 'react';
import {Input, Icon, Row, Col, CardPanel} from 'react-materialize';

/**
 * @description This is an input field for common component
 *
 * @function TextFieldGroup
 *
 * @param {any} props
 *
 * @return {DOM} DOM element
 */
const TextFieldGroup = ({ name, value, label, type, onChange,
 s, icon}) => (
  <div className='form'>
        <Input
        s={s}
        label={label}
        value={value}
        onChange={onChange}
        type={type}
        name={name}
        className='form-control'
        validate
        >
      <Icon>{icon}</Icon>
      </Input>
  </div>
);

export default TextFieldGroup;

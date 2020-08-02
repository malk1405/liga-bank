import React from 'react';
import PropTypes from 'prop-types';
import {block} from './form';
import getClasses from '../../utils/getClasses';
import Input from '../input/input';

const Field = ({label, ...input}) => (
  <React.Fragment>
    <label className={getClasses({block, element: `label`})}>
      <span
        className={`input-label ${getClasses({
          block,
          element: `label-text`,
        })}`}
      >
        {label}
      </span>
      <Input
        {...input}
        required
        classes={getClasses({block, element: `field`})}
      />
    </label>
  </React.Fragment>
);

Field.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Field;

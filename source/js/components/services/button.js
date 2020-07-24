import React from 'react';
import getClasses from '../../utils/getClasses';
import {block} from './tabs';
import Link from '../link/link';

function Button() {
  return (
    <Link
      classes={
        getClasses({
          block: `button`,
          modifiers: [`main`],
        }) +
        ` ` +
        getClasses({block, element: `button`})
      }
      draggable={false}
    >
      Узнать подробнее
    </Link>
  );
}

export default Button;

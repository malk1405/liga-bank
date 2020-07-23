import React from 'react';
import PropTypes from 'prop-types';

import getClasses from '../../utils/getClasses';

function Panel({children, style, block, mod}) {
  return (
    <div
      className={getClasses({block, element: `panel`, modifiers: mod})}
      style={style}
    >
      <div
        className={
          getClasses({block: `container`, modifiers: [block]}) +
          ` ` +
          getClasses({block, element: `panel-wrapper`, modifiers: mod})
        }
      >
        <div className={getClasses({block, element: `content-wrapper`})}>

          <p className={getClasses({block, element: `title`, modifiers: mod})}>
          Лига Банк
          </p>
          {children}
        </div>
      </div>
    </div>
  );
}

Panel.defaultProps = {
  mod: [],
};

Panel.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
  block: PropTypes.string.isRequired,
  mod: PropTypes.arrayOf(PropTypes.string),
};

export default Panel;

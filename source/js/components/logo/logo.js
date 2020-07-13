import React from 'react';
import PropTypes from 'prop-types';

import LogoImg from '../../../img/svg/logo.svg';

function Logo({classes}) {
  return (
    <div className={`logo ${classes}`}>
      <a>
        <LogoImg />
      </a>
    </div>
  );
}

Logo.defaultProps = {
  classes: ``
};

Logo.propTypes = {
  classes: PropTypes.string,
};

export default Logo;

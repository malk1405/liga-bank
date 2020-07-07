import React, {useState, useCallback, useContext, useEffect} from 'react';

import MediaContext from '../../context/media';

import links from '../../shared/links';
import Link from '../link/link';
import Hamburger from '../hamburger/hamburger';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const {isPhone} = useContext(MediaContext);

  useEffect(() => {
    setIsOpen(false);
  }, [isPhone]);

  const onToggle = useCallback(() => {
    setIsOpen((v) => !v);
  }, [setIsOpen]);

  return (
    <nav className="nav">
      <Hamburger isOpen={isOpen} onClick={onToggle} />
      <ul className="nav__links">
        {links.map(({text, href}) => (
          <li
            className="nav__item"
            key={text}
            style={isPhone && isOpen ? {height: `30px`} : null}
          >
            <Link href={href}>{text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;

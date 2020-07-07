import React, {useState, useCallback} from 'react';
import links from '../../shared/links';
import Link from '../link/link';
import Hamburger from '../hamburger/hamburger';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const onToggle = useCallback(() => {
    setIsOpen((v) => !v);
  }, [setIsOpen]);

  return (
    <nav>
      <Hamburger isOpen={isOpen} onClick={onToggle} />
      <ul>
        {links.map(({text, href}) => (
          <li key={text} style={{height: `100px`}}>
            <Link href={href}>{text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;

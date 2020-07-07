import React from 'react';
import links from '../../shared/links';
import Link from '../link/link';

function Nav() {
  return (
    <nav>
      <button aria-expanded="false">
        <div className="hamburger">
          <div className="hamburger__inner"></div>
        </div>
        <span className="visually-hidden">Меню</span>
      </button>
      <ul>
        {links.map(({text, href}) => (
          <li key={text}>
            <Link href={href}>{text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;

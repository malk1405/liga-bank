import React from 'react';
import links from '../../shared/links';
import Link from '../link/link';

function Nav() {
  return (
    <React.Fragment>
      <button>
        <span className="visually-hidden header__hamburger">Показать меню</span>
      </button>
      <nav>
        <ul>
          {links.map(({text, href}) => (
            <li key={text}>
              <Link href={href}>{text}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </React.Fragment>
  );
}

export default Nav;

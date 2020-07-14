import React from 'react';

import Logo from '../logo/logo';
import links from '../../shared/links';
import Link from '../link/link';
import contacts from './contacts';
import socialLinks from './social';

function Footer() {
  return (
    <footer className="footer container">
      <div className="footer__nav">
        <Logo />
        <div className="footer__info">
          <p>150015, г. Москва, ул. Московская, д. 32</p>
          <p>Генеральная лицензия Банка России №1050</p>
          <p>&copy; Лига Банк, 2019</p>
          <ul className="footer__links">
            {links.map(({text, href}) => (
              <li key={text}>
                <Link href={href}>{text}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer__contacts">
        {contacts.map(({img, tel, text}) => (
          <div key={tel} className="footer__contact contact">
            {img}
            <div className="contact__text">
              <a className="link" href={`tel:${tel.split(` `).join(``)}`}>
                {tel}
              </a>
              <p>{text}</p>
            </div>
          </div>
        ))}
        <ul className="footer__social social">
          {socialLinks.map(({img, title}, id) => (
            <li key={id} className="social__item">
              <a href="#" className="social__link" title={title} aria-label={title}>{img}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;

import React from 'react';

import Logo from '../logo/logo';
import links from '../../shared/links';
import Link from '../link/link';
import contacts from './contacts';
import socialLinks from './social';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__nav">
          <Logo classes="footer__logo" />
          <div className="footer__info">
            <p>150015, г. Москва, ул. Московская, д. 32</p>
            <p>Генеральная лицензия Банка России №1050</p>
            <p>&copy; Лига Банк, 2019</p>
          </div>
          <ul className="footer__links">
            {links.map(({text, href}) => (
              <li key={text} className="footer__link">
                <Link href={href}>{text}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer__contacts">
          <ul className="footer__phones list">
            {contacts.map(({Img, tel, text, mod}) => (
              <li key={tel} className={`footer__phone footer__phone--${mod}`}>
                <Img
                  className={`footer__phone-icon footer__phone-icon--${mod}`}
                />
                <a className="link" href={`tel:${tel.split(` `).join(``)}`}>
                  {tel}
                </a>
                <p>{text}</p>
              </li>
            ))}
          </ul>
          <ul className="footer__social social">
            {socialLinks.map(({Img, title, mod}, id) => (
              <li key={id} className="footer__social-item">
                <a href="#" title={title} aria-label={title}>
                  <Img
                    className={`footer__social-icon footer__social-icon--${mod}`}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

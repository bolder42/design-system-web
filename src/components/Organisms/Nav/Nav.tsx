import React from 'react';
import type { INavProps } from './types';
import { Signature } from '../../Atoms/Signature';
import { Tag } from '../../Atoms/Tag';
import './Nav.css';

const Nav: React.FC<INavProps> = ({ sections = ['// SECTION'], brandText = 'B_' }) => {
  return (
    <header className="b42-nav">
      <div className="b42-nav__brand">
        <Signature text={brandText} />
      </div>
      <nav className="b42-nav__links" aria-label="Main navigation">
        {sections.map((s, i) => (
          <a key={i} className="b42-nav__link" href="#">
            <Tag>{s}</Tag>
          </a>
        ))}
      </nav>
    </header>
  );
};

export { Nav };

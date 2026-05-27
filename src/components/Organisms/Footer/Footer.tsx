import React from 'react';
import type { IFooterProps } from './types';
import { Signature } from '../../Atoms/Signature';
import { Tag } from '../../Atoms/Tag';
import './Footer.css';

const Footer: React.FC<IFooterProps> = ({ links = [], brandText = 'B_' }) => {
  return (
    <footer className="b42-footer">
      <div className="b42-footer__brand">
        <Signature text={brandText} />
      </div>
      <div className="b42-footer__links">
        {links.map((l, i) => (
          <a key={i} className="b42-footer__link" href={l.href || '#'}>
            <Tag>{l.label}</Tag>
          </a>
        ))}
      </div>
    </footer>
  );
};

export { Footer };

import React from 'react';
import type { IHeroProps } from './types';
import { Button } from '../../Atoms/Button';
import './Hero.css';

const Hero: React.FC<IHeroProps> = ({ title, kicker, body, actions }) => {
  const defaultTitle = (
    <>
      Transformações reais<br />
      não se contratam —<br />
      <span className="b42-hero__highlight">se constroem</span> juntos.
    </>
  );

  return (
    <section className="b42-hero">
      {kicker && <div className="b42-hero__kicker">{kicker}</div>}
      <h1 className="b42-hero__title">{title || defaultTitle}</h1>
      {body && <p className="b42-hero__body">{body}</p>}
      <div className="b42-hero__actions">
        {actions || (
          <>
            <Button variant="primary">Leva a gente pro seu time</Button>
            <Button variant="ghost">Ver cases</Button>
          </>
        )}
      </div>
    </section>
  );
};

export { Hero };

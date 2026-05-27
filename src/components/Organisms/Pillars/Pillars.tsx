import React from 'react';
import type { IPillarsProps } from './types';
import { Card } from '../../Atoms/Card';
import './Pillars.css';

const Pillars: React.FC<IPillarsProps> = ({ items = [] }) => {
  return (
    <section className="b42-pillars">
      <div className="b42-pillars__grid">
        {items.map((it, i) => (
          <Card key={i}>
            <div className="b42-pillars__title">{it.title}</div>
            {it.subtitle && <div className="b42-pillars__subtitle">{it.subtitle}</div>}
            {it.body && <div className="b42-pillars__body">{it.body}</div>}
          </Card>
        ))}
      </div>
    </section>
  );
};

export { Pillars };

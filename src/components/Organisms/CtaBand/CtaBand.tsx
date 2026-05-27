import React from 'react';
import type { ICtaBandProps } from './types';
import { Button } from '../../Atoms/Button';
import './CtaBand.css';

const CtaBand: React.FC<ICtaBandProps> = ({ children, kicker }) => {
  return (
    <div className="b42-ctaband">
      <div className="b42-ctaband__inner">
        <div className="b42-ctaband__content">
          {kicker && <div className="b42-ctaband__kicker">{kicker}</div>}
          <div className="b42-ctaband__children">{children}</div>
        </div>
        <div className="b42-ctaband__cta">
          <Button variant="primary">Fale com o time</Button>
        </div>
      </div>
    </div>
  );
};

export { CtaBand };

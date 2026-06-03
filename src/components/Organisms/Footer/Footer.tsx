import React from 'react';
import type { IFooterProps } from './types';
import { Signature } from '../../Molecules/Signature';
import './Footer.css';

const Footer: React.FC<IFooterProps> = ({ links = [], brandText = 'B42' }) => {
  const renderDefaultCols = () => (
    <div className="b42-footer__nav">
      <div className="b42-footer__col">
        <div className="b42-footer__col-heading">// HUB</div>
        <a href="#">Quem somos</a>
        <a href="#">Time</a>
        <a href="#">Manifesto</a>
        <a href="#">Carreiras</a>
      </div>

      <div className="b42-footer__col">
        <div className="b42-footer__col-heading">// CONSTRUÍMOS</div>
        <a href="#">Produtos com IA</a>
        <a href="#">Estratégia + Tech</a>
        <a href="#">Formação de líderes</a>
      </div>

      <div className="b42-footer__col">
        <div className="b42-footer__col-heading">// 42 RIO</div>
        <a href="#">Campus</a>
        <a href="#">Seletiva</a>
        <a href="#">Alunos</a>
      </div>

      <div className="b42-footer__col">
        <div className="b42-footer__col-heading">// CONTATO</div>
        <a href="mailto:hello@b42.rio">hello@b42.rio</a>
        <a href="#">Rio de Janeiro</a>
        <a href="#">LinkedIn →</a>
      </div>
    </div>
  );

  return (
    <footer className="b42-footer">
      <div className="b42-footer__top">
        <div className="b42-footer__brand">
          <Signature text={brandText} />
          <p className="b42-footer__brand-desc">Hub de inovação formado pela Bolder e pela 42 Rio — maior campus da rede 42 na América Latina.</p>
        </div>

        {links.length ? (
          <div className="b42-footer__links">
            {links.map((l, i) => (
              <a key={i} className="b42-footer__link" href={l.href || '#'}>
                {l.label}
              </a>
            ))}
          </div>
        ) : (
          renderDefaultCols()
        )}
      </div>

      <div className="b42-footer__bottom">
        <div className="b42-footer__copyright">© 2025 B42 • Bolder • 42 Rio • Todos os direitos reservados</div>
        <div className="b42-footer__meta">$ b42</div>
      </div>
    </footer>
  );
};

export { Footer };

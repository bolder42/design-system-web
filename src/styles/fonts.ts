import regularFont from './fonts/FiraMono-Regular.ttf';
import mediumFont from './fonts/FiraMono-Medium.ttf';
import boldFont from './fonts/FiraMono-Bold.ttf';

const fontFaceCss = `
@font-face {
  font-family: 'Fira Mono';
  src: url('${regularFont}') format('truetype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Fira Mono';
  src: url('${mediumFont}') format('truetype');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Fira Mono';
  src: url('${boldFont}') format('truetype');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
`;

if (typeof document !== 'undefined' && !document.getElementById('b42-fonts')) {
  const style = document.createElement('style');
  style.id = 'b42-fonts';
  style.textContent = fontFaceCss;
  document.head.appendChild(style);
}
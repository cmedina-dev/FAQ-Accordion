import { handleButtonPress } from './accordion';
import { checkInput, resetInput } from './keyboard';
import './styles/styles.scss';

document.getElementById('accordion-card')?.addEventListener('keydown', e => {
  if (e.key === ' ' || e.key === 'Enter') {
    e.preventDefault();
    checkInput(e);
  }
});

document
  .getElementById('accordion-card')
  ?.addEventListener('keyup', e => resetInput());

document.getElementById('accordion-card')?.addEventListener('click', e => {
  if (e.target) {
    const element = e.target as Element;
    let btn;
    if (
      element.tagName === 'IMG' &&
      element.parentNode?.nodeName === 'BUTTON'
    ) {
      btn = element.parentNode as HTMLButtonElement;
    } else if (element.tagName === 'BUTTON') {
      btn = element as HTMLButtonElement;
    } else if (element.tagName === 'H2') {
      btn = element.nextElementSibling as HTMLButtonElement;
    }
    handleButtonPress(btn);
  }
});

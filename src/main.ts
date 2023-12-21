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
    if (
      element.tagName === 'IMG' &&
      element.parentNode?.nodeName === 'BUTTON'
    ) {
      const btn = element.parentNode as HTMLButtonElement;
      handleButtonPress(btn);
    } else if (element.tagName === 'BUTTON') {
      const btn = element as HTMLButtonElement;
      handleButtonPress(btn);
    }
  }
});

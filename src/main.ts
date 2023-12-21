import { toggleButton } from './button';
import './styles/styles.scss';

document.getElementById('accordion-card')?.addEventListener('click', e => {
  if (e.target) {
    const element = e.target as Element;
    if (
      element.tagName === 'IMG' &&
      element.parentNode?.nodeName === 'BUTTON'
    ) {
      const btnImage = element as HTMLImageElement;
      toggleButton(btnImage);
    }
  }
});

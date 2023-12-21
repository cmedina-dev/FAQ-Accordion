import { toggleVisibility } from './accordion';
import { toggleButton, toggleExpanded } from './button';
import './styles/styles.scss';

document.getElementById('accordion-card')?.addEventListener('click', e => {
  if (e.target) {
    const element = e.target as Element;
    if (
      element.tagName === 'IMG' &&
      element.parentNode?.nodeName === 'BUTTON'
    ) {
      const btn = element.parentNode as HTMLButtonElement;
      const controlledDescription = document.getElementById(
        btn.getAttribute('aria-controls') as string
      ) as HTMLParagraphElement;
      const btnImage = element as HTMLImageElement;
      toggleButton(btnImage);
      toggleExpanded(btn);
      toggleVisibility(controlledDescription);
    }
  }
});

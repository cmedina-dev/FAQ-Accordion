import { toggleButton, toggleExpanded } from './button';

function toggleVisibility(paragraph: HTMLParagraphElement): void {
  if (paragraph.offsetHeight === 0) {
    paragraph.style.height = `${paragraph.scrollHeight}px`;
    paragraph.style.marginTop = '16px';
    paragraph.style.marginBottom = '16px';
  } else {
    paragraph.style.height = '0px';
    paragraph.style.marginTop = '0px';
    paragraph.style.marginBottom = '0px';
  }
}

export function handleButtonPress(button: HTMLButtonElement | undefined): void {
  if (button) {
    const controlledDescription = document.getElementById(
      button.getAttribute('aria-controls') as string
    ) as HTMLParagraphElement;
    const buttonImage = button.firstChild?.nextSibling as HTMLImageElement;
    toggleButton(buttonImage);
    toggleExpanded(button);
    toggleVisibility(controlledDescription);
  }
}

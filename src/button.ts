export function toggleButton(button: HTMLImageElement): void {
  if (button.src.includes('plus')) {
    button.src = '../../assets/images/icon-minus.svg';
  } else {
    button.src = '../../assets/images/icon-plus.svg';
  }
}

export function toggleExpanded(button: HTMLButtonElement): void {
  if (button.ariaExpanded === 'true') {
    button.ariaExpanded = 'false';
  } else {
    button.ariaExpanded = 'true';
  }
}

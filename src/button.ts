export function toggleButton(button: HTMLImageElement): void {
  if (button.src.includes('plus')) {
    button.src = '../../assets/images/icon-minus.svg';
  } else {
    button.src = '../../assets/images/icon-plus.svg';
  }
}

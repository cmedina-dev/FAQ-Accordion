let isDown = false;

export function checkInput(e: KeyboardEvent): void {
  if (!isDown) {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault;
      const eTarget = e.target as HTMLElement;
      eTarget.click();
      isDown = true;
    }
  }
}

export function resetInput(): void {
  isDown = false;
}

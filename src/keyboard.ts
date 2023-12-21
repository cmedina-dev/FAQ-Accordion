let isDown = false;

export function checkInput(e: KeyboardEvent): void {
  if (!isDown) {
    const eTarget = e.target as HTMLElement;
    eTarget.click();
    isDown = true;
  }
}

export function resetInput(): void {
  isDown = false;
}

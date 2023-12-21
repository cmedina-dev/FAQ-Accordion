export function toggleVisibility(paragraph: HTMLParagraphElement): void {
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

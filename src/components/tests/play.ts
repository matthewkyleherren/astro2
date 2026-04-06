export type Props = {
  id?: string;
  class?: string;
  size?: number;
  colour?: string;
  withFill?: boolean;
};

export function createPlayIcon({
  id,
  class: className,
  size = 24,
  colour = 'white',
  withFill = false
}: Props = {}): string {
  return `<svg
    ${id ? `id="${id}"` : ''}
    ${className ? `class="${className}"` : ''}
    xmlns="http://www.w3.org/2000/svg"
    width="${size}"
    height="${size}"
    viewBox="0 0 24 24"
    fill="${withFill ? colour : 'none'}"
    stroke="${colour}"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  ><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>`;
}

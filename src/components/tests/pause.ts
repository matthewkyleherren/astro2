export type Props = {
  id?: string;
  class?: string;
  size?: number;
  colour?: string;
};

export function createPauseIcon({ id, class: className, size = 24, colour = 'white' }: Props = {}): string {
  return `<svg
    ${id ? `id="${id}"` : ''}
    ${className ? `class="${className}"` : ''}
    width="${size}"
    height="${size}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="${colour}"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <rect x="14" y="3" width="5" height="18" rx="1" />
    <rect x="5" y="3" width="5" height="18" rx="1" />
  </svg>
`;
}

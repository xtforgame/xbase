export function format(first: string, middle: string, last: string): string {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

export function createRamdomUniqueId() {
  // https://gist.github.com/gordonbrander/2230317
  return Math.random().toString(36).substr(2, 9);
}

export function createRamdomUniqueIdForElement() {
  let id = createRamdomUniqueId();
  let element = document.getElementById(id);
  while(element) {
    id = createRamdomUniqueId();
    element = document.getElementById(id);
  }
  return id;
}

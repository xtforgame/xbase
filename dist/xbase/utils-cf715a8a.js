function format(first, middle, last) {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}
function createRamdomUniqueId() {
  // https://gist.github.com/gordonbrander/2230317
  return Math.random().toString(36).substr(2, 9);
}
function createRamdomUniqueIdForElement() {
  let id = createRamdomUniqueId();
  let element = document.getElementById(id);
  while (element) {
    id = createRamdomUniqueId();
    element = document.getElementById(id);
  }
  return id;
}

export { createRamdomUniqueIdForElement as a, createRamdomUniqueId as c, format as f };

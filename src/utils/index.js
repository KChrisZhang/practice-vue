export function setTitle(title) {
  localStorage.setItem('title', title)
}

export function getTitle() {
  return localStorage.getItem('title')
}

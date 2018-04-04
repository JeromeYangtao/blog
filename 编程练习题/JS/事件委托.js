function on (target, selector, eventType, callback) {
  let parent = document.querySelector(selector)
  parent.addEventListener(eventType, () => {
    let el = e.target
    while (el.tagName.toLocaleUpperCase !== target) {
      el = el.parentNode
      if (el.matches(selector)) {
        el = null
        break
      }
    }
    if (el) {
      callback()
    }
  })
}

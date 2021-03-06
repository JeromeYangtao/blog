class Observer {
  constructor() {
    this._message = {}
  }

  regist(type, fn) {
    // 订阅
    this._message[type]
      ? this._message[type].push(fn)
      : (this._message[type] = [fn])
  }

  emit(type, payload) {
    // 发布
    if (!this._message[type]) {
      return
    }
    this._message[type].forEach(event => event(payload))
  }

  remove(type, fn) {
    // 退订
    if (!this._message[type].includes(fn)) {
      return
    }
    const idx = this._message[type].indexOf(fn)
    this._message[type].splice(idx, 1)
  }
}

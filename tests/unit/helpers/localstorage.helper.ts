
export default class LocalStorageMock {
  store: any

  constructor () {
    this.store = { }
  }

  clear () {
    this.store = { }
  }

  getItem (key: string) {
    return this.store[key] || null
  }

  setItem (key: string, value: any) {
    this.store[key] = String(value)
  }
}

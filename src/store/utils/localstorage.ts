export default {

  setLocalStorageItem (key: string, value: any) {
    if (value instanceof Object) value = JSON.stringify(value)
    localStorage.setItem(key, value)
  },

  getLocalStorageItem (key: string) {
    const item = localStorage.getItem(key)
    // if(item?.substr(0,1) === '{' && item?.substr(item.length-1, 1) === '}'){
    //   return JSON.parse(item)
    // }
    // return item
    try {
      return item ? JSON.parse(item) : item
    } catch (error) {
      return item
    }
  }

}

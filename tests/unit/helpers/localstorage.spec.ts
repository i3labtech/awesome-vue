import LocalStorageMock from './localstorage.helper'
import Faker from 'faker'

import Storage from '../../../src/store/utils/localstorage'

beforeEach(() => {
  const localStorage = new LocalStorageMock()
  Object.defineProperty(window, 'localStorage', { value: localStorage })
})

describe('Test the LocalStorageMock functions', () => {
  it('should be set a string on localstorage', () => {
    expect(localStorage.setItem('key1', 'value1'))
  })

  it('should be a return value in localstorage', () => {
    const expected = Faker.random.alphaNumeric(32)
    localStorage.setItem('key1', expected)
    const readLocalStorage = localStorage.getItem('key1')
    expect(readLocalStorage).toBe(expected)
  })
})

describe('Test the Local Storage Module Store functions', () => {
  it('should be set a string on localstorage', () => {
    const object = {
      propertyA: Faker.internet.userName(),
      propertyB: Faker.internet.avatar(),
      propertyC: Faker.address.city()
    }

    expect(Storage.setLocalStorageItem('key1', object))
  })

  it('should be a return object value in localstorage', () => {
    const expected = {
      propertyA: Faker.internet.userName(),
      propertyB: Faker.internet.avatar(),
      propertyC: Faker.address.city()
    }

    Storage.setLocalStorageItem('key1', expected)
    const readLocalStorage = Storage.getLocalStorageItem('key1')
    expect(readLocalStorage).toStrictEqual(expected) // StrictEqual for compare Objects
  })

  it('should be a return property value in localstorage', () => {
    const expected = Faker.internet.userName()
    Storage.setLocalStorageItem('key1', expected)

    const readLocalStorage = Storage.getLocalStorageItem('key1')
    expect(readLocalStorage).toBe(expected)
  })
})

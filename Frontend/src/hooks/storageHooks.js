import {useEffect, useState} from "react"

//use this hooks for storing in local storage
export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (err) {
      console.error(err)
      return initialValue
    }
  })

  const setValue = value => {
    try {
      setStoredValue(value)
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (err) {
      console.error(err)
    }
  }

  return [storedValue, setValue]
}

//use this for storing in session storage
export const useSessionStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.sessionStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (err) {
      console.error(err)
      return initialValue
    }
  })

  const setValue = value => {
    try {
      setStoredValue(value)
      window.sessionStorage.setItem(key, JSON.stringify(value))
    } catch (err) {
      console.error(err)
    }
  }

  return [storedValue, setValue]
}

const getItem = key =>
  document.cookie.split("; ").reduce((total, currentCookie) => {
    const item = currentCookie.split("=")
    const storedKey = item[0]
    const storedValue = item[1]
    return key === storedKey ? decodeURIComponent(storedValue) : total
  }, "")

const setItem = (key, value, numberOfDays) => {
  const now = new Date()
  // set the time to be now + numberOfDays
  now.setTime(now.getTime() + numberOfDays * 60 * 60 * 24 * 1000)
  document.cookie = `${key}=${value};     expires=${now.toUTCString()}; path=/`
}
export const useCookieStorage = (key, defaultValue) => {
  const getCookie = () => getItem(key) || defaultValue
  const [cookie, setCookie] = useState(getCookie())
  const updateCookie = (value, numberOfDays) => {
    setCookie(value)
    setItem(key, value, numberOfDays)
  }
  return [cookie, updateCookie]
}

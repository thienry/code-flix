export function deepFreeze<T>(data: T): Readonly<T> {
  for (const name of Object.keys(data)) {
    const value = data[name as keyof T]
    if (value && typeof value === 'object') {
      deepFreeze(value)
    }
  }

  return Object.freeze(data)
}

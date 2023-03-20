import { deepFreeze } from "./helpers"

describe('Helpers Unit Tests', () => {
  it('should not freeze a scalar value', () => {
    const str = deepFreeze('test')
    expect(typeof str).toBe('string')

    let boolean = deepFreeze(true)
    expect(typeof boolean).toBe('boolean')
    boolean = deepFreeze(false)
    expect(typeof boolean).toBe('boolean')

    const number = deepFreeze(2)
    expect(typeof number).toBe('number')
  })
  
  it('should ensure is a immutable object', () => {
    const data = deepFreeze({
      key1: 'value1', 
      deep: { key2: 'value2', key3: new Date() } 
    })

    expect(() => (data as any).key1 = 'value changed')
      .toThrow("Cannot assign to read only property 'key1' of object '#<Object>'")
    expect(() => (data as any).deep.key2 = 'value changed')
      .toThrow("Cannot assign to read only property 'key2' of object '#<Object>'")
  
    expect(data.deep.key3).toBeInstanceOf(Date)
  })
})
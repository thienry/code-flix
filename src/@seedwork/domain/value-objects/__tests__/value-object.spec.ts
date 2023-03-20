import { ValueObject } from "../value-object";

class StubValueObject extends ValueObject {}

describe('ValueObject Unit Tests', () => {
  it('should set value', () => {
    let valueObject = new StubValueObject('string value')
    expect(valueObject.value).toBe('string value')
    
    valueObject = new StubValueObject({ prop: 'value' })
    expect(valueObject.value).toStrictEqual({ prop: 'value' })
  })
  
  it('should convert to string', () => {
    let date = new Date()
    const arrange = [
      { received: '', expected: '' },
      { received: 'fake test', expected: 'fake test' },
      { received: 0, expected: '0' },
      { received: 1, expected: '1' },
      { received: 5, expected: '5' },
      { received: true, expected: 'true' },
      { received: false, expected: 'false' },
      { received: date, expected: date.toString() },
      { received: { key: 'value' }, expected: JSON.stringify({ key: 'value' }) },      
    ]
    
    for (const { expected, received } of arrange) {
      const valueObject = new StubValueObject(received)
      expect(`${valueObject}`).toBe(expected)
    }
  })

  it('should ensure value object is immutable', () => {
    const data = { key1: 'value1', deep: { key2: 'value2', key3: new Date() } }
    const valueObject = new StubValueObject(data)

    expect(() => (valueObject as any).value.key1 = 'value changed')
      .toThrow("Cannot assign to read only property 'key1' of object '#<Object>'")
    expect(() => (valueObject as any).value.deep.key2 = 'value changed')
      .toThrow("Cannot assign to read only property 'key2' of object '#<Object>'")
  
    expect((valueObject as any).value.deep.key3).toBeInstanceOf(Date)
  })
})

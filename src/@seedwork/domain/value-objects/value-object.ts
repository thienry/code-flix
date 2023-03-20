import { deepFreeze } from "../utils/helpers"

export abstract class ValueObject<Value = unknown> {
  protected readonly _value: Value 

  constructor(value: Value) {
    this._value = deepFreeze(value)
  }

  get value(): Value {
    return this._value
  }

  toString = () => {
    if (typeof this.value !== 'object' || this.value === null) {
      try {
        return this.value.toString()
      } catch (error) {
        return `${this.value}`
      }
    }

    return this.value.toString() === '[object Object]' ? 
      JSON.stringify(this.value) : this.value.toString() 
  }
}

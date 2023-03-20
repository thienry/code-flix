import { validate as uuidValidate } from "uuid"

import { UniqueEntityId } from "../unique-entity-id.value-object"
import { InvalidUuidError } from "../../../../@seedwork/errors/invalid-uuid.error"

describe('UniqueEntityId Unit Tests', () => {
  const validateSpy = jest.spyOn(UniqueEntityId.prototype as any, 'validate')

  it('should throw error when uuid is invalid', () => {
    expect(() => new UniqueEntityId('fake id')).toThrowError(InvalidUuidError)
    expect(validateSpy).toHaveBeenCalled()
  })
  
  it('should accept an uuid in constructor', () => {
    const uuid = 'f3630b3a-8473-4917-bfe9-a3f5c4148e0a'
    const valueObject = new UniqueEntityId(uuid)
    expect(validateSpy).toHaveBeenCalled()
    expect(valueObject.value).toBe(uuid)
  })
  
  it('should return an uuid in constructor', () => {
    const valueObject = new UniqueEntityId()
    expect(validateSpy).toHaveBeenCalled()
    expect(uuidValidate(valueObject.value)).toBeTruthy()
  })
})

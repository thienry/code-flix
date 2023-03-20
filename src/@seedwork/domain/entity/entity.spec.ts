import { UniqueEntityId } from "../value-objects/unique-entity-id.value-object";
import { Entity } from "./entity";

class StubEntity extends Entity<{ key1: string; key2: number }> {}

describe('Entity Unit Tests', () => {
  it('should set props and id', () => {
    const arrange = { key1: 'value1', key2: 10 }
    const entity = new StubEntity(arrange)
    expect(entity.props).toStrictEqual(arrange)
    expect(entity.uniqueEntityId).toBeInstanceOf(UniqueEntityId)
    expect(entity.id).toBeDefined()
  })

  it('should accept a valid uuid', () => {
    const arrange = { key1: 'value', key2: 10 }
    const uniqueEntityId = new UniqueEntityId()
    const entity = new StubEntity(arrange, uniqueEntityId)
    expect(entity.uniqueEntityId).toBeInstanceOf(UniqueEntityId)
    expect(entity.id).toBe(uniqueEntityId.value)
  })

  it('should convert an entity to a JSON', () => {
    const arrange = { key1: 'value', key2: 10 }
    const uniqueEntityId = new UniqueEntityId()
    const entity = new StubEntity(arrange, uniqueEntityId)
    expect(entity.toJSON()).toStrictEqual({ id: entity.id, ...arrange })
  })
})

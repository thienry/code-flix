import lodash from "lodash"

import { Category } from "./category"
import { UniqueEntityId } from "../../../@seedwork/domain/value-objects/unique-entity-id.value-object"

describe('Category Unit Tests', () => {
  it('should return Category constructor', () => {
    let category = new Category({ name: 'Movie' })
    let props = lodash.omit(category.props, 'created_at')
    
    expect(props).toStrictEqual({
      name: 'Movie',
      is_active: true,
      description: null,
    })
    expect(category.props.created_at).toBeInstanceOf(Date)

    let createdAt = new Date()
    category = new Category({ 
      name: 'Movie', 
      is_active: false,
      created_at: createdAt,
      description: 'description', 
    })

    expect(category.props).toStrictEqual({ 
      name: 'Movie', 
      is_active: false,
      created_at: createdAt,
      description: 'description', 
    })

    category = new Category({ name: 'Movie', description: 'other description'  })
    expect(category.props).toMatchObject({ name: 'Movie', description: 'other description' })

    category = new Category({ name: 'Movie', is_active: true  })
    expect(category.props).toMatchObject({ name: 'Movie', is_active: true })

    createdAt = new Date()
    category = new Category({ name: 'Movie', created_at: createdAt  })
    expect(category.props).toMatchObject({ name: 'Movie', created_at: createdAt })
  })

  it('should get of id property', () => {
    const data = [
      { props: { name: 'Movie' } },
      { props: { name: 'Movie' }, id: null },
      { props: { name: 'Movie' }, id: undefined },
      { props: { name: 'Movie' }, id: new UniqueEntityId() },
    ]

    for (const item of data) {
      const category = new Category(item.props, item.id as any)
      expect(category.id).toBeDefined()
      expect(category.uniqueEntityId).toBeInstanceOf(UniqueEntityId)
    }
  })

  it('should get of name property', () => {
    const category = new Category({ name: 'Movie' })
    expect(category.name).toBe('Movie')
  })

  it('should get and set of description property', () => {
    let category = new Category({ name: 'Movie' })
    expect(category.description).toBeNull()

    category = new Category({ name: 'Movie', description: 'some description' })
    expect(category.description).toBe('some description')

    category = new Category({ name: 'Movie' })
    category['description'] = 'other description'
    expect(category.description).toBe('other description')
    category['description'] = undefined
    expect(category.description).toBeNull()
  })

  it('should get and set of is_active property', () => {
    let category = new Category({ name: 'Movie' })
    expect(category.isActive).toBeTruthy()
    
    category = new Category({ name: 'Movie', is_active: true })
    expect(category.isActive).toBeTruthy()

    category = new Category({ name: 'Movie', is_active: false })
    expect(category.isActive).toBeFalsy()
  })

  it('should get of created_at property', () => {
    let category = new Category({ name: 'Movie' })
    expect(category.createdAt).toBeInstanceOf(Date)

    let createdAt = new Date()
    category = new  Category({ name: 'Movie', created_at: createdAt })
    expect(category.createdAt).toBe(createdAt)
  })
})

import { Category } from "./category"

describe('Category Tests', () => {
  test('Category constructor', () => {
    const category = new Category('Movie')
    expect(category.name).toBe('Movie')
  })
})

import { Entity } from "../../../@seedwork/domain/entity/entity"
import { UniqueEntityId } from "../../../@seedwork/domain/value-objects/unique-entity-id.value-object"

interface CategoryProps {
  name: string, 
  description?: string, 
  is_active?: boolean, 
  created_at?: Date
}

export class Category extends Entity<CategoryProps> {
  constructor(public readonly props: CategoryProps, id?: UniqueEntityId) {
    super(props, id)
    this.props.is_active = props.is_active ?? true
    this.props.description = props.description ?? null
    this.props.created_at = props.created_at ?? new Date()
  }

  get name(): string {
    return this.props.name
  }

  private set name(value: string) {
    this.props.name = value
  }

  get description(): string {
    return this.props.description
  }

  private set description(value: string) {
    this.props.description = value ?? null
  }

  get isActive(): boolean {
    return this.props.is_active
  }

  private set isActive(value: boolean) {
    this.props.is_active = value ?? true
  }

  get createdAt(): Date {
    return this.props.created_at
  }

  update(data: Pick<Category, 'name' | 'description'>): void {
    this.name = data.name
    this.description = data.description
  }

  activate(): void {
    this.isActive = true
  }
  
  deactivate(): void {
    this.isActive = false
  }
}

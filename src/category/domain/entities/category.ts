import { UniqueEntityId } from "../../../@seedwork/domain/value-objects/unique-entity-id.value-object"

interface CategoryProps {
  name: string, 
  description?: string, 
  is_active?: boolean, 
  created_at?: Date
}

export class Category {
  readonly id: UniqueEntityId

  constructor(public readonly props: CategoryProps, id?: UniqueEntityId) {
    this.id = id ?? new UniqueEntityId()
    this.props.is_active = props.is_active ?? true
    this.props.description = props.description ?? null
    this.props.created_at = props.created_at ?? new Date()
  }

  get name(): string {
    return this.props.name
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
}

export class Category {
  id: number;
  name: string;
  description: string;

  constructor(
      id = 0,
      name = '',
      description = ''
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
  }
}

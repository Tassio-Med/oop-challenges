export abstract class Entity {
  protected name: string;
  protected id: number;

  constructor(id: number, name: string){
    this.id = id;
    this.name = name;
  }

  public getId(): number{
    return this.id
  }

  public getName(): string {
    return this.name;
  }
}
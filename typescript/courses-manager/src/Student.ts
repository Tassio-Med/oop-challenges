import { Entity } from "./Entity";

export class Student extends Entity {

  constructor(id: number, name: string){
    super(id, name);
  }

  public toString(): string{
    return `ID: ${this.id}, Name: ${this.name}`;
  }
}


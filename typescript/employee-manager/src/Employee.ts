  import { Entity } from "./Util/Entity";

  export class Employee extends Entity {
      private _position: string;
  
      constructor(id: number, name: string, position: string) {
          super(id, name);
          this._position = position;
      }
  
      public getPosition(): string {
          return this._position;
      }
  
      public setPosition(position: string): void {
          this._position = position;
      }
  
      public toString(): string {
          return `ID: ${this._id}, Name: ${this._name}, Position: ${this._position}`;
      }
  }
  
import { Entity } from "./Util/Entity";

export class EntityManager {
    private _entities: Entity[] = [];

    public addEntity(entity: Entity): void {
        this._entities.push(entity);
    }

    public removeEntity(id: number): void {
        this._entities = this._entities.filter(ent => ent.getId() !== id);
    }

    public listEntities(): void {
        this._entities.forEach(ent => console.log(ent.toString()));
    }

    public findEntity(id: number): Entity | undefined {
        return this._entities.find(ent => ent.getId() === id);
    }
}

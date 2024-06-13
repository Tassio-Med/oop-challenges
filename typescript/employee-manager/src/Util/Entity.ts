  export abstract class Entity {
    protected _id: number;
    protected _name: string;

    constructor(id: number, name: string) {
        this._id = id;
        this._name = name;
    }

    public getId(): number {
        return this._id;
    }

    public getName(): string {
        return this._name;
    }

    public abstract toString(): string;
}

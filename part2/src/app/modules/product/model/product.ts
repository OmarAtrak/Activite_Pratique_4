export class Product {
    private _id: number;
    private _name: string;
    private _checked: boolean;
    private _price: number;



    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

    public get checked(): boolean {
        return this._checked;
    }
    public set checked(value: boolean) {
        this._checked = value;
    }

    public get price(): number {
        return this._price;
    }
    public set price(value: number) {
        this._price = value;
    }

}
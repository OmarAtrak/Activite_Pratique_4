export class User {
    private _username: string;
    private _password: string;
    private _roles: Array<string>;
    private _token: string;



    public get username(): string {
        return this._username;
    }
    public set username(value) {
        this._username = value;
    }

    public get password(): string {
        return this._password;
    }
    public set password(value: string) {
        this._password = value;
    }

    public get roles(): Array<string> {
        return this._roles;
    }
    public set roles(value: Array<string>) {
        this._roles = value;
    }

    public get token(): string {
        return this._token;
    }
    public set token(value: string) {
        this._token = value;
    }


    public isHasRole(_role: string) {
        for (let index = 0; index < this.roles.length; index++) {
            const role = this.roles[index];
            if(_role == role)
                return true;
        }
        return false;
    }
}
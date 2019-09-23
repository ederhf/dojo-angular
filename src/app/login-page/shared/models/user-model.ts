export class UserModel {
    private email: string;
    public get Email(): string {
        return this.email;
    }
    public set Email(value: string) {
        this.email = value;
    }

    private password: string;
    public get Password(): string {
        return this.password;
    }
    public set Password(value: string) {
        this.password = value;
    }

    private token: string;
    public get Token(): string {
        return this.token;
    }
    public set Token(value: string) {
        this.token = value;
    }
}

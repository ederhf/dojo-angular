export class UserModel {
    private email: string;
    public get Email(): string {
        return this.email;
    }
    public set Email(value: string) {
        this.email = value;
    }
}

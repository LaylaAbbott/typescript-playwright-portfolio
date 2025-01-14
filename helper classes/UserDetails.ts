import { faker } from "@faker-js/faker";

export class UserDetails {
    email: string;
    name: string;
    password: string;

    constructor(email: string, name: string, password: string) {
        this.email = email;
        this.name = name;
        this.password = password;

    }
    static generateNewUser(): UserDetails {
        const email: string = faker.internet.email();
        const name: string = faker.person.fullName();
        const password: string = faker.internet.password({ length: 7 });
        return new UserDetails(email, name, password)
    }
}
export class Contact {
    name = "";
    lastname = "";
    email = "";
    isOnline = false;

    constructor (name, lastname, email, isOnline) {
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.isOnline = isOnline;
    }
}
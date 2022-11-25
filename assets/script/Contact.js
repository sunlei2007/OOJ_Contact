'use strict';
class Contact {
    #name
    #city
    #email
     constructor(div) {
         this.div = div;
     }
    set name(name) {
        this.#name = name;
     }
    get name() {
        return this.#name;
     }
    set city(city) {
        this.#city = city;
         
     }
    get city() {
        return this.#city;
     }
     set email(mail) {
         this.#email = mail;            
     }
    get email() {
        return this.#email;
     }
    
    addInfoToDiv() {
        const name = document.createElement("p");
        name.innerHTML = `Name: ${this.#name}`;
        const city = document.createElement("p");
        city.innerHTML = `City: ${this.#city}`;
        const email = document.createElement("p");
        email.innerHTML = `Email: ${this.#email}`;

        this.div.appendChild(name);
        this.div.appendChild(city);
        this.div.appendChild(email);
         
     }
    
}
export { Contact }
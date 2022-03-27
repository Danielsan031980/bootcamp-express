const { faker } = require('@faker-js/faker');
const express = require("express")
const app= express()
const port =8000




app.use(express.json())
app.listen(port, ()=>console.log("escuchando puerto: " + port))

const randomName = faker.name.findName(); // Rowan Nikolaus
const randomEmail = faker.internet.email(); // Tomasa_Ferry14@hotmail.com
const randomPhoneNumber = faker.phone.phoneNumber(); // 938-672-1359 x418





class Usuario {
    constructor(){
        this.id = faker.random.alphaNumeric(8);
        this.firstName = faker.name.firstName();
        this.secondName = faker.name.lastName();
        this.phone = faker.phone.phoneNumber();
        this.email = faker.internet.email(this.firstName,this.secondName);
        this.password = faker.random.alphaNumeric(8);
    }

}


class Empresa {
    constructor(){
        this.id = faker.random.alphaNumeric(8);
        this.nombre = faker.company.companyName(),
        this.address= {
            street:faker.address.streetAddress(),
            city: faker.address.cityName(),
            state: faker.address.state(),
            zipCode: faker.address.zipCodeByState(),
            country: faker.address.country()


        };
    }


}



// Invoca nuevo usuario
app.get("/api/users/new", (req, res) => {
    res.json( {usuario: new Usuario()} );
});

// Invoca nuevo nueva compañia
app.get("/api/companies/new", (req, res) => {
    res.json( {company: new Empresa()} );
});

// Invoca nuevo compañia y usuario
app.get("/api/companies", (req, res) => {
    res.json( {usuario: new Empresa(), company: new Empresa()},
     );
});

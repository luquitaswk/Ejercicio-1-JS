// Ejercicios de Practica de Javascript 1 
// Crear una lista de supermercado con al menos 10 items

let supermarketList = ["harina", "leche", "azucar", "sal", "arroz",
"fideos", "aceite", "queso", "manteca", "cafe"];

// Resuelva las respuestas, de la misma manera que se encuentra la primera

// 1. ¿Qué tenés que comprar primero?
// console.log(`Primero tengo que comprar${}`)

console.log(`Primero tengo que comprar ${supermarketList[0]}`);

// 2. ¿Qué tenés que comprar último?

console.log(`Dejo para comprar último ${supermarketList[9]}`);

// 3. ¿Cuántos productos tenés que comprar?

console.log(`En total tengo que comprar ${supermarketList.length} productos`);

// -----------------------------------------------------------------------------

// Crear un usuario con tus datos:
// * Username
// * Name
// * Age
// * List of hobbies (OJO: dice lista de hobbies)
// * City
// * student: true or false

let user = {
  username: "Kopatee",
  name: "Lucas",
  age: 28,
  hobbies: ["andar en bicicleta","manejar motos", "ver peliculas y series", "jugar videojuegos", "aprender cosas nuevas"],
  city: "CABA",
  student: true
};

// Resuelva las respuestas, de la misma manera que se encuentra la primer consigna.

// 1. ¿Cómo es tu username?

console.log(`Mi username es ${user.username}`);

// 2. ¿Cómo es tu nombre?

console.log(`Mi nombre es ${user.name}`);

// 3. ¿Cuál es tu edad?

console.log(`Tengo ${user.age} años`);

if (user.age >= 18){
  console.log("Ya soy mayor de edad");
}else {
  console.log("todavía soy menor de edad");
}

// 4. ¿Cuáles son tus hobbies? ¿Cuántos tenés?

console.log(`Mis hobbies son ${user.hobbies}`);
console.log(`tengo ${user.hobbies.length} hobbies`);


// 5. ¿Estás estudiando actualmente?
// Ojo con esta: el student = false/true va a devolverles un booleano,
// el desafío es convertir ese boolean en una respuesta friendly
// para el humano que está leyendo sus respuestas.

if (user.student === true){
  console.log("Soy estudiante");
}else {
  console.log("No soy estudiante");
}

// 6. ¿De dónde sos?

console.log(`Soy de ${user.city}`);


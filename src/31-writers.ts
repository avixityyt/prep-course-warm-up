export { };

/**
 * Loop over the array and for each alive writer print out the following:
 * "Hi, my name is {firstName} {lastName}. I am {age} years old, and work as a {occupation}."
 */

const writers = [
  {
    firstName: "Virginia",
    lastName: "Woolf",
    occupation: "writer",
    age: 59,
    alive: false
  },
  {
    firstName: "Zadie",
    lastName: "Smith",
    occupation: "writer",
    age: 41,
    alive: true
  },
  {
    firstName: "Jane",
    lastName: "Austen",
    occupation: "writer",
    age: 41,
    alive: false
  },
  {
    firstName: "bell",
    lastName: "hooks",
    occupation: "writer",
    age: 64,
    alive: true
  }
];

interface Writers {
  firstName: string,
  lastName: string,
  occupation: string,
  age: number,
  alive: boolean
}

function eachAlive(writer: Writers[]): string | void {

  for (let i = 0; i < writer.length; i++) {
    if (writer[i].alive) {
      console.log("Hi, my name is "
        + writer[i].firstName[0].toUpperCase()
        + writer[i].firstName.slice(1) + " "
        + writer[i].lastName[0].toUpperCase()
        + writer[i].lastName.slice(1) + ". I am "
        + writer[i].age + " years old, and work as a "
        + writer[i].occupation + ".");
    }
  }

}

console.log(eachAlive(writers));
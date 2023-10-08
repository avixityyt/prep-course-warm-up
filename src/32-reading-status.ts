export { };

const library = [
  {
    title: "The Road Ahead",
    author: "Bill Gates",
    isRead: true
  },
  {
    title: "Steve Jobs",
    author: "Walter Isaacson",
    isRead: true
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    isRead: false
  }
];

const showStatus = (lib: { title: string, author: string, isRead: boolean }[]): string | void => {

  for (let i = 0; i < lib.length; i++) {
    lib[i].isRead
      ? console.log(`Already read ${lib[i].title} by ${lib[i].author}.`)
      : console.log(`You still need to read ${lib[i].title} by ${lib[i].author}.`);
  }

};

showStatus(library);

/*
  Expected output:

  Already read 'Bill Gates' by The Road Ahead.
  Already read 'Steve Jobs' by Walter Isaacson.
  You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins.

*/

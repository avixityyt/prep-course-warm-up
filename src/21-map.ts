export { };


function tidyUpString(str: string[]): string[] {
  return str.map(word => word
    .trim()
    .toLowerCase()
    .replace("/", ""));
}

// You are allowed to edit this function
function capitalise(str: string[]): string[] {
  const cleanStr = tidyUpString(str);
  return cleanStr.map(word => word.charAt(0).toUpperCase() + word.slice(1));
}

const mentors: string[] = ["/Daniel ", "irina ", " Gordon", "ashleigh "];
let mentorsTidy: string[] = capitalise(mentors); // You are allowed to edit this line

console.log(mentorsTidy); // Expected output: ["Daniel", "Irina", "Gordon", "Ashleigh"] Expected output: ["Daniel", "Irina", "Gordon", "Ashleigh"]

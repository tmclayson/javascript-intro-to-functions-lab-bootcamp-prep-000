function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {  
  console.log(shout(string));
}

function logWhisper(string) {
  console.log(whisper(string));
}

function sayHiToGrandma(string) {
  if (string === string.toLowerCase()) {
    return(`I can't here you!`);
  }
  if (string === string.toUpperCase()) {
    return(`YES INDEED!`);
  }  
  if (string === `I love you, Grandma.`) {
    return(`I love you, too`);
  }
}
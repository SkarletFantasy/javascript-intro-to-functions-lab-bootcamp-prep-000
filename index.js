function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log('HELLO'); 
  string.toUpperCase()
}

function logWhisper(string) {
  console.log('hello');
  string.toLowerCase()
}

  if (logWhisper) {
    return ("I can't hear you!")
  } else if (logShout) {
    return ("YES INDEED!")
  } else ('I love you, Grandma.') {
    return ("I love you, too.")
  }
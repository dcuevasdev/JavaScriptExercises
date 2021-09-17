const dataUser = prompt("Ingresa un texto");
const sizeDataUser = dataUser.length;

/*for (let lyrics of dataUser) {
  document.write(lyrics + "-");
}*/

for (let i = 0; i < sizeDataUser; i++) {
  let lyric = dataUser.charAt(i);
  if (i == sizeDataUser - 1) {
    document.write(lyric);
  } else {
    document.write(lyric + "-");
  }
}

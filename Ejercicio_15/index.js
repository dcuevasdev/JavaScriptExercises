const userData = prompt("Escribe un texto");
const sizeUserData = userData.length;
let letterUserData = "";

for (let i = sizeUserData; i >= 0; i--) {
  letterUserData = letterUserData + userData.charAt(i);
}

document.write(letterUserData);

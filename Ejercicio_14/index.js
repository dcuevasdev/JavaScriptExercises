const userData = prompt("Introduce un Texto que contenga paréntesis:");
const sizeUserData = userData.length;
let start;
let end;

for (let i = 0; i < sizeUserData; i++) {
  let letterUserData = userData.charAt(i);

  if (letterUserData == "(") {
    start = i + 1;
  } else if (letterUserData == ")") {
    end = i;
  }
}

const text = userData.slice(start, end);

if (end === undefined) {
  document.write("No colocaste palabra dentro ()");
} else {
  document.write(`La palabra dentro del () es: ${text}`);
}

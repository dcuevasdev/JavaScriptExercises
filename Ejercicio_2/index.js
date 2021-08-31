const notes = [
  { value: 0, qualification: "muy deficiente" },
  { value: 1, qualification: "muy deficiente" },
  { value: 2, qualification: "muy deficiente" },
  { value: 3, qualification: "insuficiente" },
  { value: 4, qualification: "insuficiente" },
  { value: 5, qualification: "insuficiente" },
  { value: 6, qualification: "bien" },
  { value: 7, qualification: "notable" },
  { value: 8, qualification: "notable" },
  { value: 9, qualification: "sobresaliente" },
  { value: 10, qualification: "sobresaliente" },
];

let random = Math.floor(Math.random() * notes.length);

let findNote = notes.find((note) => {
  return note.value === random;
});

document.write(
  `Tú nota es ${findNote.value} y su calificación es ${findNote.qualification}`
);

let promedio, notaPractica, notaProblemas, notaTeorico: number;
let nombre: string = "";

nombre = prompt("Ingrese el nombre del alumno:");

while (nombre !== "") {
  console.log("Alumno:" + nombre);
  notaPractica = Number(prompt("Ingrese la nota de la practica"));
  notaProblemas = Number(prompt("Ingrese la nota de los problemas"));
  notaTeorico = Number(prompt("Ingrese la nota de la teoria"));
  console.log(
    "nota de la practica es " + notaPractica,
    "nota de los problemas es " + notaProblemas,
    "nota de la teoria es " + notaTeorico
  );

  if (
    notaPractica >= 0 &&
    notaPractica <= 10 &&
    notaProblemas >= 0 &&
    notaProblemas <= 10 &&
    notaTeorico >= 0 &&
    notaTeorico <= 10
  ) {
    promedio = notaPractica * 0.1 + notaProblemas * 0.5 + notaTeorico * 0.4;
    console.log("El promedio de", nombre, "es", promedio);
  } else {
    console.log("ERROR: se ha ingresado un dato no valido.");
  }
  nombre = prompt("Ingrese el nombre del alumno:");
}

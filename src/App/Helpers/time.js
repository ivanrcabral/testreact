/*
* Retorna el formato de tiempo requerido
* millisecondsDate Number
* @returns String
*/
export function getFormattedDate(millisecondsDate) {
  const date= new Date(millisecondsDate)
  let year= date.getFullYear().toString().slice(-2)
  let formattedDate = ("0"+date.getDate()).slice(-2)+"/"+("0"+(date.getMonth()+1)).slice(-2)+"/"+year
  // Ejemplo de retorno '25/01/20'
  console.log(formattedDate)
  return formattedDate;
}

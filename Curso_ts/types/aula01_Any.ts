// * Any = algum tipo ou qualquer outro tipo
// * Ultimo casos:
function showMsg(msg: any) {
  return msg;
}
console.log(showMsg([1, 2, 3, 4]));
console.log(showMsg("Hello"));
console.log(showMsg(1));

// другая реализация revertString
export function revertString(str) {
  if (str != "" && typeof str == "string") {
    let arrStr = [...str];
    return arrStr.reverse().join("");
  } else {
    return false;
  }
}
